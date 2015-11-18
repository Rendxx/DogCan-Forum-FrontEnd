from flask import Flask, render_template, send_from_directory, jsonify, Response 
app = Flask(__name__)

import sys, json
reload(sys)
sys.setdefaultencoding("utf-8")

topics = [
    {'id': 0, 'category':'巴萨', 'title':'德拉克斯勒被禁赛两场', 'reply': 3, 'view':204, 'lastTime':'2015-12-3', 'firstTime':'2015-11-13', 'author':{'id':0, 'name':'userA', 'portrait':'user0.png'}, 'user':[{'id':1, 'name':'user 01', 'portrait':'user1.png'},{'id':2, 'name':'user 02', 'portrait':'user2.png'},{'id':3, 'name':'user 03', 'portrait':'user3.png'},{'id':4, 'name':'user 04', 'portrait':'user4.png'}]},
    {'id': 1, 'category':'切尔西', 'title':'英媒：穆帅欲清除部分球员', 'reply': 23, 'view':2104, 'lastTime':'2015-5-24', 'firstTime':'2015-1-16', 'author':{'id':3, 'name':'user 03', 'portrait':'user3.png'}, 'user':[]},
    {'id': 2, 'category':'那不勒斯', 'title':'伊瓜因：望能夺本赛季意甲', 'reply': 2, 'view':43, 'lastTime':'2015-2-2', 'firstTime':'2015-1-13', 'author':{'id':5, 'name':'user 05', 'portrait':'user5.png'}, 'user':[{'id':6, 'name':'user 06', 'portrait':'user6.png'}]},
    {'id': 3, 'category':'其它', 'title':'贝利小罗内少挑球过人对比', 'reply': 14, 'view':323, 'lastTime':'2015-12-3', 'firstTime':'2015-11-22', 'author':{'id':2, 'name':'user 02', 'portrait':'user2.png'}, 'user':[{'id':3, 'name':'user 03', 'portrait':'user3.png'},{'id':4, 'name':'user 04', 'portrait':'user4.png'}]},
    {'id': 4, 'category':'皇马', 'title':'哈梅斯：巴萨状态上佳，但我们是皇马', 'reply': 4, 'view':9, 'lastTime':'2015-2-22', 'firstTime':'2015-2-1', 'author':{'id':7, 'name':'狗能', 'portrait':'user7.png'}, 'user':[{'id':8, 'name':'王好人', 'portrait':'user8.png'},{'id':9, 'name':'高原原', 'portrait':'user9.png'}]},
    {'id': 5, 'category':'巴萨', 'title':'德拉克斯勒被禁赛两场', 'reply': 3, 'view':204, 'lastTime':'2015-12-3', 'firstTime':'2015-11-13', 'author':{'id':0, 'name':'userA', 'portrait':'user0.png'}, 'user':[{'id':1, 'name':'user 01', 'portrait':'user1.png'},{'id':2, 'name':'user 02', 'portrait':'user2.png'},{'id':3, 'name':'user 03', 'portrait':'user3.png'},{'id':4, 'name':'user 04', 'portrait':'user4.png'}]},
    {'id': 6, 'category':'切尔西', 'title':'英媒：穆帅欲清除部分球员', 'reply': 23, 'view':2104, 'lastTime':'2015-5-24', 'firstTime':'2015-1-16', 'author':{'id':3, 'name':'user 03', 'portrait':'user3.png'}, 'user':[]},
    {'id': 7, 'category':'那不勒斯', 'title':'伊瓜因：望能夺本赛季意甲', 'reply': 2, 'view':43, 'lastTime':'2015-2-2', 'firstTime':'2015-1-13', 'author':{'id':5, 'name':'user 05', 'portrait':'user5.png'}, 'user':[{'id':6, 'name':'user 06', 'portrait':'user6.png'}]},
    {'id': 8, 'category':'其它', 'title':'贝利小罗内少挑球过人对比', 'reply': 14, 'view':323, 'lastTime':'2015-12-3', 'firstTime':'2015-11-22', 'author':{'id':2, 'name':'user 02', 'portrait':'user2.png'}, 'user':[{'id':3, 'name':'user 03', 'portrait':'user3.png'},{'id':4, 'name':'user 04', 'portrait':'user4.png'}]},
    {'id': 9, 'category':'皇马', 'title':'哈梅斯：巴萨状态上佳，但我们是皇马', 'reply': 4, 'view':9, 'lastTime':'2015-2-22', 'firstTime':'2015-2-1', 'author':{'id':7, 'name':'狗能', 'portrait':'user7.png'}, 'user':[{'id':8, 'name':'王好人', 'portrait':'user8.png'},{'id':9, 'name':'高原原', 'portrait':'user9.png'}]}
];


@app.route("/forum")
def forum():
    return render_template('forum/index.desktop.html', title="DogCan Forum", pageIdx="forum", topic=topics)

@app.route("/forum/topic/<path:idx>")
def forum_topic(idx):
    if int(idx) > 40 :
        return ""
    return Response(json.dumps(topics),  mimetype='application/json')


@app.route("/tool")
def tool():
    return render_template('tool/index.desktop.html', title="DogCan Forum", pageIdx="tool")

@app.route("/about")
def about():
    return render_template('about/index.desktop.html', title="DogCan Forum", pageIdx="about")

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