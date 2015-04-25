from flask import Flask
from flask import render_template


app = Flask(__name__)

@app.route('/')
def root():
    return render_template('root.jinja2')

@app.route('/blog/')
def blog():
    return 'Blog'

@app.route('/admin/')
def admin():
    return 'All Employees'

@app.route('/employee/<employee_id>/')
def employee():
    return 'Employee'

@app.route('/team/<team_id>/')
def team():
    return 'Team'



if __name__ == '__main__':
    app.run(debug=True)