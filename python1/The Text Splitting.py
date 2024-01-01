total,l1,l2=map(int,input().split())
max,min=max(l1,l2),min(l1,l2)
string=input()
mo=total%max
if mo%min==0:
    all=(total-mo)//max+mo//min
    print(all)
    for i in range(max,total-mo+1,max):
        print(string[i-max:i])
    for j in range(total-mo+min,total+1,min):
        print(string[j-min:j])
elif total%min==0:
    all=total//min
    print(all)
    for j in range(min,total+1,min):
        print(string[j-min:j])
elif total%min+min==max:
    all=total//min
    print(all)
    for j in range(min,total+1-max,min):
        print(string[j-min:j])
    print(string[-max:])
else:print(-1)