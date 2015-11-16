from flask import Flask, render_template, send_from_directory
app = Flask(__name__)

@app.route("/forum")
def forum():
    return render_template('forum/index.desktop.html', title="DogCan Forum", category="1")

@app.route("/tool")
def tool():
    return render_template('tool/index.desktop.html', title="DogCan Forum", category="2")

@app.route("/about")
def forum():
    return render_template('about/index.desktop.html', title="DogCan Forum", category="3")

@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('js', path)

@app.route('/css/<path:path>')
def send_css(path):
    return send_from_directory('css', path)

@app.route('/lib/<path:path>')
def send_lib(path):
    return send_from_directory('lib', path)

@app.route('/image/<path:path>')
def send_image(path):
    return send_from_directory('image', path)

@app.route('/layout/<path:path>')
def send_layout(path):
    return send_from_directory('layout', path)

if __name__ == '__main__':
    app.run(debug=True)