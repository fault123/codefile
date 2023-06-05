allPassengers,topFloor=map(int,input().split())
# floors=[]
# time=[]
# for i in range(allPassengers):
#     a,b=map(int,input().split())
#     floors.append(a)
#     time.append(b)

# if  topFloor-floors[-1]<time[-1]:
#         time1=floors[-1]
# else:
#         time1=topFloor-floors[-1]

# for j in range(1,allPassengers):
#         if time[allPassengers-j-1] > time1+floors[allPassengers-j]-floors[allPassengers-j-1]:
#             time1=time[allPassengers-j-1]
#         else:
#             time1=time1+floors[allPassengers-j]-floors[allPassengers-j-1]
# time1+=floors[0]
# print(time1)
things=[0]*(topFloor+1)
# spe,spe1=map(int,input().split())
# things[spe]=spe1
for i in range(0,allPassengers):
    a,b=map(int,input().split())
    things[a]=b
time1,last,count=0,0,0
for j in range(0,topFloor):
    if things[topFloor-j]>j and things[topFloor-j]!=0:
        time1=things[topFloor-j]
        last=j
        count+=1
    elif things[topFloor-j]<=j and things[topFloor-j]!=0:
        time1+=j-last
        last=j
        count+=1
    elif count==allPassengers:
        time1+=topFloor-j+1
print(time1)
#if things[topFloor-j]>time1 and things[topFloor-j]!=0:#从后往前遍历找到不为0且需要等待的，为它赋值为等待时间
    #     time1=things[topFloor-j]#当前需要等待的层数的等待时间
    #     last=j#把当前层数的j存进last中方便在另外一个if中计算层差
    #     count+=1#统计不为0的层的个数
    # elif things[topFloor-j]<=time1 and things[topFloor-j]!=0:#不需要等待的，赋值为原来的加上层间距
    #     time1+=j-last#当前不需要等待层与last的差
    #     last=j
    #     count+=1
    # elif count==allPassengers:#找到最后上乘客的层数，为它加上到底层的时间，如果count为总人数，那么就证明人上完了，于是直接一口气到底层
    #     time1+=topFloor-j+1