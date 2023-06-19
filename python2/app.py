
import os
import sys
from flask import Flask,request,session,render_template
# from werkzeug.utils import secure_filename

app=Flask(__name__)
app.secret_key=sys.argv[1]

@app.errorhandler(404)
def Error404(e):
    return render_template('404.html'),404

@app.errorhandler(400)
@app.errorhandler(401)
@app.errorhandler(403)
@app.errorhandler(405)
@app.errorhandler(500)
def Error(e):
    return render_template('403.html'),403

@app.route('/',methods=['GET','POST'])
@app.route('/index.php',methods=['GET','POST'])
def index():
    if not session:
        session['username']="user"
    if request.args.get('file'):
        file=request.args.get('file')
        filepath=os.path.join('uploads',file)
        if not os.path.exists(filepath) or os.path.isdir(filepath) or ".." in filepath or "flag" in filepath:
            return "Hacker!!!"
        else:
            with open(filepath,'r') as f:
                content=f.read()
            return content
    else:
        return render_template('index.html')

@app.route('/upload.php',methods=['GET','POST'])
def upload():
    if not session:
        session['username']="user"
    if session.get('username') and session.get('username')=="admin":
        if request.method=="POST" and 'file' in request.files and os.path.splitext(request.files['file'].filename)[1]==".py":
            # request.files['file'].save(os.path.join("./uploads",secure_filename(request.files['file'].filename)))
            try:
                exec(request.files['file'].read().decode())
            except:
                pass
            return "Success!"
        else:
            return "Post your .py file and I'll exec it!"
    else:
        return "You are not admin!!!"

@app.route('/file.py',methods=['GET','POST'])
def file():
    if not session:
        session['username']="user"
    return render_template('file.py.html')

@app.route('/uploads',methods=['GET','POST'])
@app.route('/uploads/Never_Gonna_Give_You_Flag.txt',methods=['GET','POST'])
def flag():
    if not session:
        session['username']="user"
    return render_template('403.html'),403

if __name__ == '__main__':
    app.run('0.0.0.0',port=80,debug=False)