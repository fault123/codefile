# galf='PyvragFvqrYbtvafNerRnfl@syner-ba.pbz'
# yyyy=flag=''
# for i in galf:
#     if ord(i) in range(65,78) or ord(i) in range(97,110):
#         flag+=i
#     else:
#         flag+=chr(ord(i)+26)
# print(flag)
galf='PyvragFvqrYbtvafNerRnfl@syner-ba.pbz'
flag=''
for i in galf:
    if ord(i) in range(78,91) or ord(i) in range(110,123):
        flag+=chr(ord(i)-13)
    else:
        flag+=chr(ord(i)+13)
print(flag)
