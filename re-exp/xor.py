a = [0x00, 0x66, 0x0A, 0x6b, 0x0c, 0x77, 0x26, 0x4f, 0x2e, 0x40,
     0x11, 0x78, 0x0d, 0x5a, 0x3b, 0x55, 0x11, 0x70, 0x19, 0x46,
     0x1f, 0x76, 0x22, 0x4d, 0x23, 0x44, 0x0e, 0x67, 0x06, 0x68,
     0x0f, 0x47, 0x32, 0x4f]
flag = ""
for i in range(1, len(a)):
    flag += chr(a[i] ^ a[i-1])
print(flag)

