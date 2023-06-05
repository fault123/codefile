import base64 
import pickle 
from flask import Flask, request 
app = Flask(__name__) 
@app.route('/') 
def index(): 
    with open('app.py', 'r') as f: 
        return f.read() 
@app.route('/calc', methods=['GET']) 
def getFlag(): 
    payload = request.args.get("payload") 
    pickle.loads(base64.b64decode(payload).replace(b'os', b'')) #将payload反序列化后中不能有os模块，否则将替换为空，考虑使用编码绕过或者char函数绕过
    return "ganbadie!" 
@app.route('/readFile', methods=['GET']) 
def readFile(): 
    filename = request.args.get('filename').replace("flag", "????") 
    with open(filename, 'r') as f: 
        return f.read() 
if __name__ == '__main__': 
    app.run(host='0.0.0.0')
    