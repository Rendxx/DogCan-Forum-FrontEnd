/*
    Copyright (c) 2015 Dongxu Ren - http://www.rendxx.com/
    Theme R2 JS 
    Dependency: jQuery

    Basic function

    Function: 
        1) Add css-class information
        2) Add Floating
*/
$(function () {
    "use strict";

    // global object
    window["_theme_r2"] = window["_theme_r2"] || {};
    var _Global = window["_theme_r2"];

    /* Parameters */

    /* Grid class name */
    var r_classes = {
        "row-center":"r2-row-center",
        "row-full": "r2-row-full",
        "clear": "r2-clear",
        "floating": "r2-float",
        "row": {
            "center": "r2-row-center",
            "full": "r2-row-full"
        },
        "grid": {
            "1": "r2-grid-1",
            "2": "r2-grid-2",
            "3": "r2-grid-3",
            "4": "r2-grid-4",
            "6": "r2-grid-6",
            "12": "r2-grid-12"
        }
    };

    /* Functions */
    var addFloating = function () {
        var ele = $("body").find("." + r_classes["floating"]);
        for (var i = 0; i < ele.length; i++) {
            $(ele[i]).append('<div class="' + r_classes["clear"] + '"></div>');
        }

        for (var rowName in r_classes["row"]) {
            if (!r_classes["row"].hasOwnProperty(rowName)) break;
            ele = $("body").find("." + r_classes["row"][rowName]);
            for (var i = 0; i < ele.length; i++) {
                $(ele[i]).append('<div class="' + r_classes["clear"] + '"></div>');
            }
        }
    };

    var _setupFunc = function () {
        _Global["cssClass"] = r_classes
    };

    var _init = function () {
        addFloating();
        _setupFunc();
    }();
});
/*
    Copyright (c) 2015 Dongxu Ren - http://www.rendxx.com/
    Theme R2 JS 
    Dependency: jQuery

    Switch between mobile/pc layout

    Function: 
        1) Add Floating
        2)Manage sliding-down grid
*/
$(function () {
    "use strict";

    // global object
    window["_theme_r2"] = window["_theme_r2"] || {};
    var _Global = window["_theme_r2"];

    /* Parameters */

    /* Functions */

    var _setCookie = function (isTrue, id) {
        var exp = new Date();
        exp.setTime(exp.getTime() + 2*24 * 60 * 60 * 1000);
        var val = isTrue ? "MobileDevice" + id + "=AllowMobile" : "MobileDevice" + id + "=IgnoreMobile";

        document.cookie = val
            + ((exp == null) ? "" : (";  expires=" + exp.toGMTString()))
    };

    var _setupFunc = function () {
        _Global.layout = {};
        _Global.layout.mobile = function (id) {
            _setCookie(true, id);
            location.reload();
        };

        _Global.layout.desktop = function (id) {
            _setCookie(false, id);
            location.reload();
        };
    };

    var _init = function () {
        _setupFunc();
    }();
});
/*
    Copyright (c) 2015 Dongxu Ren - http://www.rendxx.com/
    Theme R2 JS 
    Dependency: jQuery

    Function for mobile layout

    Function: 
        1) Add Floating
        2)Manage sliding-down grid
*/
$(function () {
    "use strict";
    /* Parameters */

    /* Functions */

    var _setupFunc = function () {
    };

    var _init = function () {
        _setupFunc();
    }();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJhc2ljLmpzIiwiU3dpdGNoLmpzIiwiTW9iaWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJyMi5tb2JpbGUuc2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIENvcHlyaWdodCAoYykgMjAxNSBEb25neHUgUmVuIC0gaHR0cDovL3d3dy5yZW5keHguY29tL1xyXG4gICAgVGhlbWUgUjIgSlMgXHJcbiAgICBEZXBlbmRlbmN5OiBqUXVlcnlcclxuXHJcbiAgICBCYXNpYyBmdW5jdGlvblxyXG5cclxuICAgIEZ1bmN0aW9uOiBcclxuICAgICAgICAxKSBBZGQgY3NzLWNsYXNzIGluZm9ybWF0aW9uXHJcbiAgICAgICAgMikgQWRkIEZsb2F0aW5nXHJcbiovXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgLy8gZ2xvYmFsIG9iamVjdFxyXG4gICAgd2luZG93W1wiX3RoZW1lX3IyXCJdID0gd2luZG93W1wiX3RoZW1lX3IyXCJdIHx8IHt9O1xyXG4gICAgdmFyIF9HbG9iYWwgPSB3aW5kb3dbXCJfdGhlbWVfcjJcIl07XHJcblxyXG4gICAgLyogUGFyYW1ldGVycyAqL1xyXG5cclxuICAgIC8qIEdyaWQgY2xhc3MgbmFtZSAqL1xyXG4gICAgdmFyIHJfY2xhc3NlcyA9IHtcclxuICAgICAgICBcInJvdy1jZW50ZXJcIjpcInIyLXJvdy1jZW50ZXJcIixcclxuICAgICAgICBcInJvdy1mdWxsXCI6IFwicjItcm93LWZ1bGxcIixcclxuICAgICAgICBcImNsZWFyXCI6IFwicjItY2xlYXJcIixcclxuICAgICAgICBcImZsb2F0aW5nXCI6IFwicjItZmxvYXRcIixcclxuICAgICAgICBcInJvd1wiOiB7XHJcbiAgICAgICAgICAgIFwiY2VudGVyXCI6IFwicjItcm93LWNlbnRlclwiLFxyXG4gICAgICAgICAgICBcImZ1bGxcIjogXCJyMi1yb3ctZnVsbFwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcImdyaWRcIjoge1xyXG4gICAgICAgICAgICBcIjFcIjogXCJyMi1ncmlkLTFcIixcclxuICAgICAgICAgICAgXCIyXCI6IFwicjItZ3JpZC0yXCIsXHJcbiAgICAgICAgICAgIFwiM1wiOiBcInIyLWdyaWQtM1wiLFxyXG4gICAgICAgICAgICBcIjRcIjogXCJyMi1ncmlkLTRcIixcclxuICAgICAgICAgICAgXCI2XCI6IFwicjItZ3JpZC02XCIsXHJcbiAgICAgICAgICAgIFwiMTJcIjogXCJyMi1ncmlkLTEyXCJcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8qIEZ1bmN0aW9ucyAqL1xyXG4gICAgdmFyIGFkZEZsb2F0aW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBlbGUgPSAkKFwiYm9keVwiKS5maW5kKFwiLlwiICsgcl9jbGFzc2VzW1wiZmxvYXRpbmdcIl0pO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICQoZWxlW2ldKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCInICsgcl9jbGFzc2VzW1wiY2xlYXJcIl0gKyAnXCI+PC9kaXY+Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciByb3dOYW1lIGluIHJfY2xhc3Nlc1tcInJvd1wiXSkge1xyXG4gICAgICAgICAgICBpZiAoIXJfY2xhc3Nlc1tcInJvd1wiXS5oYXNPd25Qcm9wZXJ0eShyb3dOYW1lKSkgYnJlYWs7XHJcbiAgICAgICAgICAgIGVsZSA9ICQoXCJib2R5XCIpLmZpbmQoXCIuXCIgKyByX2NsYXNzZXNbXCJyb3dcIl1bcm93TmFtZV0pO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgJChlbGVbaV0pLmFwcGVuZCgnPGRpdiBjbGFzcz1cIicgKyByX2NsYXNzZXNbXCJjbGVhclwiXSArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIF9zZXR1cEZ1bmMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgX0dsb2JhbFtcImNzc0NsYXNzXCJdID0gcl9jbGFzc2VzXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBfaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBhZGRGbG9hdGluZygpO1xyXG4gICAgICAgIF9zZXR1cEZ1bmMoKTtcclxuICAgIH0oKTtcclxufSk7IiwiLypcclxuICAgIENvcHlyaWdodCAoYykgMjAxNSBEb25neHUgUmVuIC0gaHR0cDovL3d3dy5yZW5keHguY29tL1xyXG4gICAgVGhlbWUgUjIgSlMgXHJcbiAgICBEZXBlbmRlbmN5OiBqUXVlcnlcclxuXHJcbiAgICBTd2l0Y2ggYmV0d2VlbiBtb2JpbGUvcGMgbGF5b3V0XHJcblxyXG4gICAgRnVuY3Rpb246IFxyXG4gICAgICAgIDEpIEFkZCBGbG9hdGluZ1xyXG4gICAgICAgIDIpTWFuYWdlIHNsaWRpbmctZG93biBncmlkXHJcbiovXHJcbiQoZnVuY3Rpb24gKCkge1xyXG4gICAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gICAgLy8gZ2xvYmFsIG9iamVjdFxyXG4gICAgd2luZG93W1wiX3RoZW1lX3IyXCJdID0gd2luZG93W1wiX3RoZW1lX3IyXCJdIHx8IHt9O1xyXG4gICAgdmFyIF9HbG9iYWwgPSB3aW5kb3dbXCJfdGhlbWVfcjJcIl07XHJcblxyXG4gICAgLyogUGFyYW1ldGVycyAqL1xyXG5cclxuICAgIC8qIEZ1bmN0aW9ucyAqL1xyXG5cclxuICAgIHZhciBfc2V0Q29va2llID0gZnVuY3Rpb24gKGlzVHJ1ZSwgaWQpIHtcclxuICAgICAgICB2YXIgZXhwID0gbmV3IERhdGUoKTtcclxuICAgICAgICBleHAuc2V0VGltZShleHAuZ2V0VGltZSgpICsgMioyNCAqIDYwICogNjAgKiAxMDAwKTtcclxuICAgICAgICB2YXIgdmFsID0gaXNUcnVlID8gXCJNb2JpbGVEZXZpY2VcIiArIGlkICsgXCI9QWxsb3dNb2JpbGVcIiA6IFwiTW9iaWxlRGV2aWNlXCIgKyBpZCArIFwiPUlnbm9yZU1vYmlsZVwiO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSB2YWxcclxuICAgICAgICAgICAgKyAoKGV4cCA9PSBudWxsKSA/IFwiXCIgOiAoXCI7ICBleHBpcmVzPVwiICsgZXhwLnRvR01UU3RyaW5nKCkpKVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgX3NldHVwRnVuYyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBfR2xvYmFsLmxheW91dCA9IHt9O1xyXG4gICAgICAgIF9HbG9iYWwubGF5b3V0Lm1vYmlsZSA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICBfc2V0Q29va2llKHRydWUsIGlkKTtcclxuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgX0dsb2JhbC5sYXlvdXQuZGVza3RvcCA9IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgICAgICAgICBfc2V0Q29va2llKGZhbHNlLCBpZCk7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBfaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBfc2V0dXBGdW5jKCk7XHJcbiAgICB9KCk7XHJcbn0pOyIsIi8qXHJcbiAgICBDb3B5cmlnaHQgKGMpIDIwMTUgRG9uZ3h1IFJlbiAtIGh0dHA6Ly93d3cucmVuZHh4LmNvbS9cclxuICAgIFRoZW1lIFIyIEpTIFxyXG4gICAgRGVwZW5kZW5jeTogalF1ZXJ5XHJcblxyXG4gICAgRnVuY3Rpb24gZm9yIG1vYmlsZSBsYXlvdXRcclxuXHJcbiAgICBGdW5jdGlvbjogXHJcbiAgICAgICAgMSkgQWRkIEZsb2F0aW5nXHJcbiAgICAgICAgMilNYW5hZ2Ugc2xpZGluZy1kb3duIGdyaWRcclxuKi9cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIC8qIFBhcmFtZXRlcnMgKi9cclxuXHJcbiAgICAvKiBGdW5jdGlvbnMgKi9cclxuXHJcbiAgICB2YXIgX3NldHVwRnVuYyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIF9pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF9zZXR1cEZ1bmMoKTtcclxuICAgIH0oKTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9