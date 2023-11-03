flag='GXY{do_not_'
s2=[0x7F, 0x66, 0x6F, 0x60, 0x67, 0x75, 0x63, 0x69][::-1]
s=''
for i in range(8):
    if i%2==1:
        s=chr(int(s2[i])-2)
    else:
        s=chr(int(s2[i])-1)
    flag+=s
print(flag)