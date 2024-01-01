# -*- coding: utf-8 -*-
allPassengers,topFloor=map(int,input().split())
time1,last,count,a1=0,0,0,0
things=[0]*(topFloor+1)#创建数组并规定大小
for i in range(0,allPassengers):#把它们都输入到数组中去
    a,b=map(int,input().split())
    if things[a]!=0:
        things[a]=max(b,things[a])#如果在输入时有它本身不为零，则取二者的最大值存进去
        #allPassengers-=1#因为出现了值的覆盖，于是需要缩短
    else:
        things[a]=b
for j in range(0,topFloor):#电梯从上往下走
    if things[topFloor-j]>=time1:#如果当前层在列表中不为0，且大于当前层本应有的time,就更新时间
        time1=things[topFloor-j]
        time1+=1
    else:#正常自增不更新时间的条件是列表中为0，或当前层数无需等待
        time1+=1
print(time1)