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

@app.route('/team/')
def members():
    return render_template('teamMembers.jinja2')

@app.route('/team/<team_id>/')
def teamMembers(team_id):
    return render_template('statsView.jinja2',
    	teamMember=team_id,
    )

@app.route('/hiring/')
def hiring():
    return render_template('statsView.jinja2',
    	hiring=True
    )

@app.route('/candidate/')
def candidates():
    return render_template('candidates.jinja2')

@app.route('/candidate/<candidate_id>/')
def candidate(candidate_id):
    return render_template('statsView.jinja2',
    	candidate=candidate_id,
    )

if __name__ == '__main__':
    app.run(debug=True)