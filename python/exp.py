# -*- coding: utf-8 -*-
from requests import *
import time 
import re
url1="http://49cfdda8-bb25-4e6b-814a-8045ea321ea9.node4.buuoj.cn:81/"
url2="http://49cfdda8-bb25-4e6b-814a-8045ea321ea9.node4.buuoj.cn:81/index.php"
s=session()
ss=s.get(url1).text
sss=re.findall("[0-9]* [-+*/] [0-9]*",ss)
sss=''.join(sss).replace(" ","")
answer=eval(sss)
data={
    'answer':answer
}
res=s.post(url2,data)
res.encoding="UTF-8"
print(res.text)
time.sleep(0.1)
for i in range(1003):
    sss=re.findall("[0-9]* [-+*/] [0-9]*",res.text)
    sss=''.join(sss).replace(" ","")
    answer=eval(sss)
    print(answer)
    data={
        'answer':answer
    }
    res=s.post(url=url2,data=data)
    res.encoding="UTF-8"
    time.sleep(0.1)
    print(res.text)