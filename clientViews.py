from flask import Flask
app = Flask(__name__)


@app.route('/')
def root():
    return 'Hello World!'

@app.route('/blog/')
def blog():
    return 'Blog'

@app.route('/admin/')
def blog():
    return 'Blog'

@app.route('/employee/<employee_id>/')
def blog():
    return 'Blog'


if __name__ == '__main__':
    app.run()