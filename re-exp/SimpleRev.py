s1='killshadow'
s2='ADSFKNDCLS'

s2=s2.lower()

flag=""


for i in range(0,len(s1)):
    for x in range(0,128):
        if chr(x).isalpha():
            temp=(x-39-ord(s2[i])+97)%26+97
            if s1[i]==chr(temp):
                flag=flag+chr(x)
                break
print("flag{"+flag+"}")