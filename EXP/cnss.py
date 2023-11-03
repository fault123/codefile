import hashlib
payload1="2022"
payload2="CNSS"
for i in range(33,127):
    for j in range(33,127):
        for k in range(33,127):
            for m in range(33,127):
                test=payload1+chr(i)+chr(j)+chr(k)+chr(m)+payload2
                hl=hashlib.md5()
                hl.update(test.encode(encoding='utf8'))
                md5=hl.hexdigest()
                if str(md5)=='a5e8a02c361fb593dae3f3ee3256de0f':
                    print(test)

# text="张三"
# hl=hashlib.md5()
# hl.update(text.encode(encoding='utf8'))
# md5=hl.hexdigest()
# print("加密结果："+str(md5))
#payload1+chr(i)+chr(j)+chr(k)+chr(m)+payload2