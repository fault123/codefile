# import hashlib

# import string
# dst="04a65121e355b41c63ad85fe1d275fdd"

# for i in range(32,128):
#     for j in range(32,128):
#         for k in range(32,128):
#             for l in range(32,128):
#                 for m in range(32,128):
#                     hash=hashlib.md5("Y6kIwho"+chr(i)+chr(j)+chr(k)+chr(l)+chr(m).encode("utf-8"))
#                     if hash==dst:
#                         print("Y6kIwho"+chr(i)+chr(j)+chr(k)+chr(l)+chr(m))
#coding: utf-8

# import hashlib
# dic = 'abcdefghijklmnopqrstuvwxyz0123456789'
# for i in range(1000):
#   for a in dic:
#                t ='admin'+str(a)
#                md5 = hashlib.md5(t.encode('utf-8')).hexdigest()
# 	       #print t
#                if md5[:32] == 'ae8b63d93b14eadd1adb347c9e26595a':
#                    print (t)

import hashlib
for i in range(9999999):
    data = str(i).encode()
    m = hashlib.md5(data)
    m = m.hexdigest()
    if(m[:32] == ' f7a9c27969ba649875f9c33133c0924c'):
        print(i)





