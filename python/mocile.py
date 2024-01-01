# -*- coding: utf-8 -*-
import libnum #

s = 'jjYfZiYefYeiejjjYejfijZe' # ×Ö·û´®
s = libnum.s2n(s)
a = bin(s)[2:]
a = (4-(len(a)%4))*'0'+a
a = [a[i*4:(i+1)*4] for i in range(len(a)//4)]
payload=""
for i in a:
	if i=="1001":
		payload+="10"
	elif i=="0110":
		payload+="01"
	elif i=="1010":
		payload+="11"
	elif i=="0101":
		payload+="00"
	else:
		print("waaa")

print(payload)
print(libnum.n2s(int(payload, 2)))
