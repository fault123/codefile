total,l1,l2=map(int,input().split())
string=input()
max,min=max(l1,l2),min(l1,l2)
mo=max%min
if total%min==0:
    print(total//min)
    for i in range(min,total+1,min):
        print(string[i-min:i])
elif total%min!=0:
    if total%min%mo==0:
        for i in range()

