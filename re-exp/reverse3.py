# import base64
 
# Des="e3nifIH9b_C@n@dH"
# flag=""
 
# for i in range(len(Des)):
#     flag+=chr(ord(Des[i])-i)
# print(base64.b64decode(flag))
 


# flag='***'
# value=''
# output=''
# for i in range(0,1000):
#     w=1024
#     x=w%3
#     y=w//9
#     z=x*y
#     w-=z
# for i in range(10000):
#     w=20
#     x=w%6
#     y=w//3
#     z=x*y
#     w+=z
# for i in range(0,len(flag)):
#     temp=flag[i]
#     temp=chr(ord(temp)^8)
#     value+=temp
# for i in range(0,len(flag)):
#     temp=value[i]
#     temp=chr(ord(temp)+3)
#     output+=temp
# obfuscated_output=decode(base64.b64ecode(encode(output)))
# obfuscated_output=reverse(obfuscated_output)
# obfuscated_output=obfuscated_output.replace('g','6').replace('b','4').replace('o','8')
# print(obfuscated_output)


import base64
flag='=6X40024A9Tc80mQA5DKvxz4uhiQzE3O8I0MA524w1G42F1XO5VV'
flag=flag[::-1]
flag=flag.replace('6','g').replace('4','b').replace('8','o')
# flag=base64.decode(base64.b64encode(base64.encode(flag)))
flag=base64.b64decode(flag.encode()).decode()
output=''
for i in range(0,len(flag)):
    temp=chr((ord(flag[i])-3)^8)
    output+=temp
print(output)