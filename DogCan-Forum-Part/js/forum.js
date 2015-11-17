window.DogCan = window.DogCan || {};
window.DogCan.Forum = window.DogCan.Forum || {};

// manage forum layout on scrolling
window.DogCan.Forum.Layout = function () {
    var that = this;
    var html = {};

    var setupHtml = function () {
        html['header'] = $('.block-header');
        html['list'] = $('.block-list');
    };

    var setupFunc = function () {
        $$.scroll.set(html['list'][0], 200, function () {
            html['header'].addClass('fixed_');
        }, $$.scroll.REFERENCE.TOP, $$.scroll.DIRECTION.DOWN);

        $$.scroll.set(html['list'][0], 200, function () {
            html['header'].removeClass('fixed_');
        }, $$.scroll.REFERENCE.TOP, $$.scroll.DIRECTION.UP);
    };

    var _init = function () {
        setupHtml();
        setupFunc();
    };
    _init();
};
//# sourceMappingURL=forum.js.map
