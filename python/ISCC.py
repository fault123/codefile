from base64 import b64decode

secret = "==gd5V1cyIkezlnQRl3c2NzcCVlQ"

flag = []
for i,v in enumerate(b64decode(secret[::-1].encode()).decode()):
    if v.isdigit() == False:
        flag.append(v)
    else:
        flag.append((b64decode(secret[::-1].encode()).decode()[i-1])*(int(v)-1))

print("".join(flag))