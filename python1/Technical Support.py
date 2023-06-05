all=int(input())
for i in range(0,all):
    sum=0
    all1=int(input())
    list1=input()
    if list1[-1]=='Q':
        print("No")
        continue
    for j in range(0,all1):
        if list1[j]=='Q':
            sum+=1
        if list1[j]=='A':
            sum-=1
        if sum<0:
            sum=0       
    if sum>0:
        print("No")
    else:print("Yes")

