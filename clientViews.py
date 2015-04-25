from flask import Flask
app = Flask(__name__)


@app.route('/')
def root():
    return 'Hello World!'

@app.route('/blog/')
def root():
    return 'Blog'

if __name__ == '__main__':
    app.run()