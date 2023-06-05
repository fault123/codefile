dictionary = open('./dictionary.txt','r').read().split('\n')[:-1]
dict1 = {}
for pair in dictionary:
    key, value = pair.split(':')
    dict1[key] = value
print(dict1)
message="ISCC{i2s0c2c3}"

[print(dict1.get(i),end='')if i in dict1 else print(i,end='') for i in message ]
