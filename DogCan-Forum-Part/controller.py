from flask import Flask, render_template, send_from_directory
app = Flask(__name__)

@app.route("/desktop")
def layout_header():
    return render_template('index.desktop.html', title="DogCan Forum")

@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('js', path)

@app.route('/css/<path:path>')
def send_css(path):
    return send_from_directory('css', path)

@app.route('/lib/<path:path>')
def send_lib(path):
    return send_from_directory('lib', path)

@app.route('/layout/<path:path>')
def send_layout(path):
    return send_from_directory('layout', path)

if __name__ == '__main__':
    app.run(debug=True)