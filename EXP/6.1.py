# def main():
#   password = "the password can contain non-ascii charactижrs :)"
#   inp = input("Enter a Python list: ")
#   lis = eval(inp, {'__builtins__': None}, None)
#   if type(lis) != list:
#     print("That's not a list")
#     return
#   for i in lis:
#     if not isinstance(i, int):
#       print("The list can only contain integers")
#       return
#   if lis == [ord(e) for e in password]:
#     print("You are now authorized!")
#     with open("flag.txt", "r") as flag:
#       print(flag.read())
#   else:
#     print("Incorrect password!")
#     print([ord(e) for e in password])

# if __name__ == "__main__":
#   main()
# point = list(map(int,input().split(",")))
# R = int(input())
# ispoint = list(map(int,input().split(",")))

# l = (point[0] - ispoint[0])*(point[0] - ispoint[0]) + (point[1] - ispoint[1])* (point[1] - ispoint[1])

# if R*R<=l:
#     print("( %d , %d )在圆内"%(ispoint[0],ispoint[1]))
# else:
#     print("( %d , %d )在圆外"%(ispoint[0],ispoint[1]))
# c=5//0.5
# print(c)
# A = {1,2,1,2}
# print(A)
# print(set("123"))
number = 12345

sum = number % 10

while number:

    number = number//10

    sum = sum+number % 10

print(sum)
print("{:*^21,.3f}".format(1234567890.1278))
s="Hello John" ; print(s.isupper(), s.lower() ) 