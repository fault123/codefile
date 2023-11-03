# import uuid
# a=str(uuid.uuid4())
# print(a)
# import json
# b='{"username":"fault","password":"123456"}'
# a=json.loads(b)
# print(a)
import uuid

from flask import Flask, request, session
#from secret import black_list
import json
a={"username":"123","password":"123"}

app = Flask(__name__)
app.secret_key = str(uuid.uuid4())

def check(data):
    for i in black_list:
        if i in data:
            return False
    return True

def merge(src, dst):
    for k, v in src.items():
        if hasattr(dst, '__getitem__'):
            if dst.get(k) and type(v) == dict:
                merge(v, dst.get(k))
            else:
                dst[k] = v
        elif hasattr(dst, k) and type(v) == dict:
            merge(v, getattr(dst, k))
        else:
            setattr(dst, k, v)

class user():
    def __init__(self):
        self.username = ""
        self.password = ""
        pass
    def check(self, data):
        if self.username == data['username'] and self.password == data['password']:
            return True
        return False

Users = []

@app.route('/register',methods=['POST'])
def register():
    if request.data:
        try:
            if not check(a):
                return "Register Failed"
            data = json.loads(a)
            if "username" not in data or "password" not in data:
                return "Register Failed"
            User = user()
            merge(data, User)
            Users.append(User)
        except Exception:
            return "Register Failed"
        return "Register Success"
    else:
        return "Register Failed"