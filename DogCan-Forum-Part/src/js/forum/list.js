window.DogCan = window.DogCan || {};
window.DogCan.Forum = window.DogCan.Forum || {};

// manage forum list
window.DogCan.Forum.List = function () {
    var that = this;
    var _data = DogCan.Forum.List.Data;

    var html = {};
    var topics = [];
    var count = 0;

    // load from server
    this.load = function () {
        $.ajax({
            url: _data.url.list + count,
            success: function (data) {
                if (data == null) {
                    html['loading'].hide();
                    html['end'].show();
                    return;
                }
                if (data.length < _data.queryCount) {
                    html['loading'].hide();
                    html['end'].show();
                }
                var l = data.length;
                for (var i = 0; i < l; i++) {
                    topics.push(data[i]);
                }
                render();
            }
        })
    };

    // load topic data
    this.loadData = function (items) {
        if (items == null) return;
        var l = items.length;
        for (var i = 0; i < l; i++) {
            topics.push(items[i]);
        }
        render();
    }

    // render new topics to screen
    var render = function () {
        for (var l = topics.length; count < l; count++) {
            createTopic(topics[count]);
        }
    };

    var createTopic = function (topicData) {
        var id = topicData.id;
        var title = topicData.title;
        var category = topicData.category;
        var reply = topicData.reply;
        var view = topicData.view;
        var lastTime = topicData.lastTime;
        var firstTime = topicData.firstTime;
        var author = topicData.author;
        var user = topicData.user || [];

        var item = $(_data.html.item);
        item.children('.category_').text(category);
        item.find('.title_ a').text(title).attr('href', _data.url.post + id);
        item.children('.reply_').text(reply).attr('title', _data.text.reply.replace('#reply#', reply).replace('#view#', view));
        item.children('.activity_').text(lastTime).attr('title', _data.text.activity.replace('#firstTime#', firstTime).replace('#lastTime#', lastTime));

        var portrait = $(_data.html.portrait).attr('href', _data.url.user + author.id).appendTo(item.children('.user_'))
        portrait.children('img').attr('src', '/image/portrait/' + author.portrait);
        portrait.tip(author.name);
        for (var i = 0, l = user.length; i < l; i++) {
            portrait = $(_data.html.portrait).attr('href', _data.url.user + user[i].id).appendTo(item.children('.user_'));
            portrait.children('img').attr('src', '/image/portrait/' + user[i].portrait);
            portrait.tip(user[i].name);
        }
        $(_data.html.clear).appendTo(item.children('.user_'));
        item.appendTo(html['content']);
    };

    // setup function
    var setupHtml = function () {
        html['container'] = $('.topicList');
        html['header'] = {};
        html['header']['category'] = html['container'].children('.header_ .category_');
        html['header']['title'] = html['container'].children('.header_ .title_');
        html['header']['user'] = html['container'].children('.header_ .user_');
        html['header']['reply'] = html['container'].children('.header_ .reply_');
        html['header']['activity'] = html['container'].children('.header_ .activity_');

        html['content'] = html['container'].children('.content_');
        html['end'] = $('.topicEnd').hide();
        html['loading'] = $('.topicLoading');
    };

    var setupFunc = function () {
    };

    var _init = function () {
        setupHtml();
        setupFunc();
    };
    _init();
};

window.DogCan.Forum.List.Data = {
    html: {
        item: '<tr>' +
                    '<td class="title_"><a></a></td>' +
                    '<td class="category_"></td>' +
                    '<td class="user_"></td>' +
                    '<td class="reply_"></td>' +
                    '<td class="activity_"></td>' +
                '</tr>',
        portrait: '<a class="portrait_" target="_blank"><img width="25" height="25"/></a>',
        clear: '<div class="clear"></div>'
    },
    text: {
        reply: '回复数: #reply#\r\n观看数: #view#',
        activity: '立帖时间: #firstTime#\r\n最新回复: #lastTime#'
    },
    url: {
        list: '/forum/topic/',
        post: DogCan.Url.Post+'/',
        user: DogCan.Url.User + '/'
    },
    queryCount: 10
};