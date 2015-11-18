window.DogCan = window.DogCan || {};
window.DogCan.Forum = window.DogCan.Forum || {};

window.DogCan.Forum.Manager = function (opts_in) {
    var that = this;
    var html = {};

    // component
    var category = null;
    var list = null;

    var initList = function (topic) {
        list.loadData(topic);
    };

    // setup
    var setupHtml = function () {
        html['header'] = $('.block-header');
        html['category'] = $('.block-category');
        html['list'] = $('.block-list');
        html['listLoading'] = $('.block-list .topicLoading');
    };

    var setupComponent = function () {
        category = new DogCan.Forum.Category();
        list = new DogCan.Forum.List();
    };

    var setupLayout = function () {
        $$.scroll.set(html['category'][0], 200, function () {
            html['header'].addClass('small_');
        }, $$.scroll.REFERENCE.TOP, $$.scroll.DIRECTION.DOWN);

        $$.scroll.set(html['category'][0], 200, function () {
            html['header'].removeClass('small_');
        }, $$.scroll.REFERENCE.TOP, $$.scroll.DIRECTION.UP);

        $$.scroll.set(html['listLoading'][0], 20, function () {
            list && list.load();
        }, $$.scroll.REFERENCE.BOTTOM, $$.scroll.DIRECTION.DOWN);
    };

    var _init = function (opts) {
        setupHtml();
        setupLayout();
        setupComponent();

        if (opts == null) return;
        initList(opts.topic);
    };
    _init(opts_in);
};