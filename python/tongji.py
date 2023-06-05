a = list(input("zifuhcuan"))
find = input("> zimu ")
i=0
count=0
while(i<a.length-1):
    if find == a[i]:
        count+=1
        i+=1
print(count) 
# count=a.count(find)
# print(count)