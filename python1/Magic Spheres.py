begin=list(map(int,input().split()))
result=list(map(int,input().split()))
store=0
for i in range(0,3):
    if begin[i] > result[i] and (begin[i]-result[i])%2==0:
        store+=(begin[i]-result[i])//2
    elif begin[i] > result[i] and (begin[i]-result[i])%2!=0:
        store-=1
        begin[i]+=1
        store+=(begin[i]-result[i])//2
    elif begin[i] < result[i]:
        store-=(result[i]-begin[i])
if store>=0:
    print("Yes")
else: print("No")