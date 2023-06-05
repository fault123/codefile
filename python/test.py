import re
import requests

s=0
R=requests.get("https://iscc.isclab.org.cn/team/66fc426596851449318748e65175d3b4")
R.encoding='utf-8'
m=re.findall('(<td>)(\d+)(</td>)',R.text)
for i in m:
    s+=int(i[1])
print(s)