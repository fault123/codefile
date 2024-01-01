total,all=map(int,input().split())
list2=[]*all
for i in range(total):
    list1=list(map(int,input().split()))
    for j in range(list1[0]):
        if list1[j+1] not in list2:
            list2.append(list1[j+1])
if len(list2)==all:
    print("YES")
else:print("NO")       