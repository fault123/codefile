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

# import hashlib
# for i in range(9999999):
#     data = str(i).encode()
#     m = hashlib.md5(data)
#     m = m.hexdigest()
#     if(m[:32] == ' f7a9c27969ba649875f9c33133c0924c'):
#         print(i)
# lib="abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
# s="EOGWtTgSWmAh9ZLp"
# for i in lib:
#     for j in lib:
#         for k in lib:
#             for l in lib:
#                 data=str(i+j+k+l+s).encode("utf-8")
#                 data=data.hexdigest()
#                 if hashlib.sha256(data) == '886311d0c833513b1eb96ccb5b97348244c7d871b7baaa7289e6e762e8dfa931':
#                     print(i+j+k+l)

import hashlib
import itertools
from string import digits, ascii_letters, punctuation
alpha_bet=digits+ascii_letters+punctuation
strlist = itertools.product(alpha_bet, repeat=4)

sha256="4f6077da265b55896ac821a38e2cbaa7ea8e77c353cf9e0b49dbd7ac00a1046c"
tail="q55cvNj2SGSDSCqF"

xxxx=''

for i in strlist:
    data=i[0]+i[1]+i[2]+i[3]
    data_sha=hashlib.sha256((data+str(tail)).encode('utf-8')).hexdigest()
    if(data_sha==str(sha256)):
        xxxx=data
        break

print(xxxx)



