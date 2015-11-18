window.DogCan = window.DogCan || {};
window.DogCan.Forum = window.DogCan.Forum || {};

// manage forum category
window.DogCan.Forum.Category = function () {
    var that = this;
    var _data = DogCan.Forum.Category.Data;
    var html = {};

    var setupHtml = function () {
        html['latest'] = $('.categoryList .latest_');
        html['team'] = $('.categoryList .team_');

        html['latest'].addClass(_data.css.actived);
    };

    var setupFunc = function () {
        var css_actived = _data.css.actived;
        html['latest'].click(function () {
            html['latest'].addClass(css_actived);
            html['team'].removeClass(css_actived);
        });
        html['team'].click(function () {
            html['team'].addClass(css_actived);
            html['latest'].removeClass(css_actived);
        });
    };

    var _init = function () {
        setupHtml();
        setupFunc();
    };
    _init();
};

window.DogCan.Forum.Category.Data = {
    css: {
        actived: 'actived'
    }
};
