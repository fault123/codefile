str=['d','d','2','9','4','0','c','0','4','4','6','2','b','4','d','d','7','c','4','5','0','5','2','8','8','3','5','c','c','a','1','5']

str[2]=chr(ord(str[2])+ord(str[3])-50)
str[4]=chr( ord(str[2])+ord(str[5])-0x30 )
str[30]=chr( ord(str[0x1f])+ord(str[9])-0x30)
str[14]=chr( ord(str[27])+ord(str[28])-97 )

for i in range(16):
    x=str[0x1f-i]
    str[0x1f-i]=str[i]
    str[i]=x

for i in str:
    print (i,end="")
