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
#if things[topFloor-j]>time1 and things[topFloor-j]!=0:#�Ӻ���ǰ�����ҵ���Ϊ0����Ҫ�ȴ��ģ�Ϊ����ֵΪ�ȴ�ʱ��
    #     time1=things[topFloor-j]#��ǰ��Ҫ�ȴ��Ĳ����ĵȴ�ʱ��
    #     last=j#�ѵ�ǰ������j���last�з���������һ��if�м�����
    #     count+=1#ͳ�Ʋ�Ϊ0�Ĳ�ĸ���
    # elif things[topFloor-j]<=time1 and things[topFloor-j]!=0:#����Ҫ�ȴ��ģ���ֵΪԭ���ļ��ϲ���
    #     time1+=j-last#��ǰ����Ҫ�ȴ�����last�Ĳ�
    #     last=j
    #     count+=1
    # elif count==allPassengers:#�ҵ�����ϳ˿͵Ĳ�����Ϊ�����ϵ��ײ��ʱ�䣬���countΪ����������ô��֤���������ˣ�����ֱ��һ�������ײ�
    #     time1+=topFloor-j+1