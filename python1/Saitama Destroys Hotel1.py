# -*- coding: utf-8 -*-
allPassengers,topFloor=map(int,input().split())
time1,last,count,a1=0,0,0,0
things=[0]*(topFloor+1)#�������鲢�涨��С
for i in range(0,allPassengers):#�����Ƕ����뵽������ȥ
    a,b=map(int,input().split())
    if things[a]!=0:
        things[a]=max(b,things[a])#���������ʱ��������Ϊ�㣬��ȡ���ߵ����ֵ���ȥ
        #allPassengers-=1#��Ϊ������ֵ�ĸ��ǣ�������Ҫ����
    else:
        things[a]=b
for j in range(0,topFloor):#���ݴ���������
    if things[topFloor-j]>=time1:#�����ǰ�����б��в�Ϊ0���Ҵ��ڵ�ǰ�㱾Ӧ�е�time,�͸���ʱ��
        time1=things[topFloor-j]
        time1+=1
    else:#��������������ʱ����������б���Ϊ0����ǰ��������ȴ�
        time1+=1
print(time1)