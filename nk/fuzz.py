# -*- coding: UTF-8 -*-
import requests
 
#这里填写自己的靶机网址
url = "http://f0fa42dc-1bfc-42f1-a4d9-05278143cf1f.node2.yuzhian.com.cn/"
 
str= ""
for i in range(255):
    data = {'NKCTF':chr(i)}
    retext = requests.post(url,data=data).text
    if "hacker!!!" in retext:
        print(1)
    else:
        str += chr(i)
 
print(str)