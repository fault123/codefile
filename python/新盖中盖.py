import base64
result=base64.b64encode('yushenhuicuoxiaba'.encode('utf-8'))
for i in range(0,100):
    result=base64.b64encode(result)
print(result)