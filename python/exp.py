# -*- coding: utf-8 -*-
import requests,time,re

url = "http://49cfdda8-bb25-4e6b-814a-8045ea321ea9.node4.buuoj.cn:81/index.php"
req = requests.session()    #���ֻỰ
getRe = req.get(url)    #get����
getRe.encoding = "UTF-8"    #�����صĽ����UTF-8���룬��Ȼ�᷵������
reContent = re.findall("[0-9]* [-+*/] [0-9]*",getRe.text)   #��ȡ���ʽ��math��search����ֻ��ƥ��һ�Σ�findall��һֱƥ��
formula = ''.join(reContent).replace(" ", "")   #��ȡ���ʽ
comResult = eval(formula)   #evalִ��һ�����ʽ
print(comResult)    
data = {"answer":comResult}
postRe = req.post(url,data)
postRe.encoding = "UTF-8"
print(postRe.text)

for i in range(1005):   #�����м��Σ��������е�����ʧ��
    reContent = re.findall("[0-9]* [-+*/] [0-9]*",postRe.text)
    formula = ''.join(reContent).replace(" ", "")
    comResult = eval(formula)
    print(comResult)
    data = {"answer":comResult}
    postRe = req.post(url,data)
    postRe.encoding = "UTF-8"
    time.sleep(0.1)		#����̫��ᱻ����
    print(postRe.text) 
