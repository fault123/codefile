from flask import Flask, request, render_template_string

app = Flask(__name__)
app.secret_key="if_u_are_admin"

@app.route("/")
def hello_world():
    return "hello Flask!"

@app.route("/neicunma")
def neicunma():
    person = "admin"
    if request.args.get('name'):
        if request.args.get('name'):
            template = '<h1>Hi,%s.</h1>'%person
            return render_template_string(template)
        else:
            return "Only admin can login"
    

if __name__=="__main__":
    app.run('0.0.0.0',debug=False)