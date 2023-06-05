import requests
import re

s=requests.session()
url="http://120.48.43.5/"
a=s.get(url)
b=a.text.split()
print(b)
sum=int(b[0][28:34])+int(b[2])
print(sum)
r=s.get(url,params={"sum":sum})
print(r.text)



nums=re.findall(r'([0-9]{6} \+ [0-9]{6})',r.text)[0]
b=nums.split(" + ")
print(nums.split(" + "))
sum2= int (b[0])+int(b[1])
print(sum2)
c=s.get(url,params={"sum":sum2})
print(c.text)