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
    pickle.loads(base64.b64decode(payload).replace(b'os', b'')) #��payload�����л����в�����osģ�飬�����滻Ϊ�գ�����ʹ�ñ����ƹ�����char�����ƹ�
    return "ganbadie!" 
@app.route('/readFile', methods=['GET']) 
def readFile(): 
    filename = request.args.get('filename').replace("flag", "????") 
    with open(filename, 'r') as f: 
        return f.read() 
if __name__ == '__main__': 
    app.run(host='0.0.0.0')
    