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

    Function for desktop layout

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJhc2ljLmpzIiwiU3dpdGNoLmpzIiwiRGVza3RvcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicjIuZGVza3RvcC5zY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgQ29weXJpZ2h0IChjKSAyMDE1IERvbmd4dSBSZW4gLSBodHRwOi8vd3d3LnJlbmR4eC5jb20vXHJcbiAgICBUaGVtZSBSMiBKUyBcclxuICAgIERlcGVuZGVuY3k6IGpRdWVyeVxyXG5cclxuICAgIEJhc2ljIGZ1bmN0aW9uXHJcblxyXG4gICAgRnVuY3Rpb246IFxyXG4gICAgICAgIDEpIEFkZCBjc3MtY2xhc3MgaW5mb3JtYXRpb25cclxuICAgICAgICAyKSBBZGQgRmxvYXRpbmdcclxuKi9cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICAvLyBnbG9iYWwgb2JqZWN0XHJcbiAgICB3aW5kb3dbXCJfdGhlbWVfcjJcIl0gPSB3aW5kb3dbXCJfdGhlbWVfcjJcIl0gfHwge307XHJcbiAgICB2YXIgX0dsb2JhbCA9IHdpbmRvd1tcIl90aGVtZV9yMlwiXTtcclxuXHJcbiAgICAvKiBQYXJhbWV0ZXJzICovXHJcblxyXG4gICAgLyogR3JpZCBjbGFzcyBuYW1lICovXHJcbiAgICB2YXIgcl9jbGFzc2VzID0ge1xyXG4gICAgICAgIFwicm93LWNlbnRlclwiOlwicjItcm93LWNlbnRlclwiLFxyXG4gICAgICAgIFwicm93LWZ1bGxcIjogXCJyMi1yb3ctZnVsbFwiLFxyXG4gICAgICAgIFwiY2xlYXJcIjogXCJyMi1jbGVhclwiLFxyXG4gICAgICAgIFwiZmxvYXRpbmdcIjogXCJyMi1mbG9hdFwiLFxyXG4gICAgICAgIFwicm93XCI6IHtcclxuICAgICAgICAgICAgXCJjZW50ZXJcIjogXCJyMi1yb3ctY2VudGVyXCIsXHJcbiAgICAgICAgICAgIFwiZnVsbFwiOiBcInIyLXJvdy1mdWxsXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIFwiZ3JpZFwiOiB7XHJcbiAgICAgICAgICAgIFwiMVwiOiBcInIyLWdyaWQtMVwiLFxyXG4gICAgICAgICAgICBcIjJcIjogXCJyMi1ncmlkLTJcIixcclxuICAgICAgICAgICAgXCIzXCI6IFwicjItZ3JpZC0zXCIsXHJcbiAgICAgICAgICAgIFwiNFwiOiBcInIyLWdyaWQtNFwiLFxyXG4gICAgICAgICAgICBcIjZcIjogXCJyMi1ncmlkLTZcIixcclxuICAgICAgICAgICAgXCIxMlwiOiBcInIyLWdyaWQtMTJcIlxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLyogRnVuY3Rpb25zICovXHJcbiAgICB2YXIgYWRkRmxvYXRpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGVsZSA9ICQoXCJib2R5XCIpLmZpbmQoXCIuXCIgKyByX2NsYXNzZXNbXCJmbG9hdGluZ1wiXSk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgJChlbGVbaV0pLmFwcGVuZCgnPGRpdiBjbGFzcz1cIicgKyByX2NsYXNzZXNbXCJjbGVhclwiXSArICdcIj48L2Rpdj4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIHJvd05hbWUgaW4gcl9jbGFzc2VzW1wicm93XCJdKSB7XHJcbiAgICAgICAgICAgIGlmICghcl9jbGFzc2VzW1wicm93XCJdLmhhc093blByb3BlcnR5KHJvd05hbWUpKSBicmVhaztcclxuICAgICAgICAgICAgZWxlID0gJChcImJvZHlcIikuZmluZChcIi5cIiArIHJfY2xhc3Nlc1tcInJvd1wiXVtyb3dOYW1lXSk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAkKGVsZVtpXSkuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiJyArIHJfY2xhc3Nlc1tcImNsZWFyXCJdICsgJ1wiPjwvZGl2PicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgX3NldHVwRnVuYyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBfR2xvYmFsW1wiY3NzQ2xhc3NcIl0gPSByX2NsYXNzZXNcclxuICAgIH07XHJcblxyXG4gICAgdmFyIF9pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGFkZEZsb2F0aW5nKCk7XHJcbiAgICAgICAgX3NldHVwRnVuYygpO1xyXG4gICAgfSgpO1xyXG59KTsiLCIvKlxyXG4gICAgQ29weXJpZ2h0IChjKSAyMDE1IERvbmd4dSBSZW4gLSBodHRwOi8vd3d3LnJlbmR4eC5jb20vXHJcbiAgICBUaGVtZSBSMiBKUyBcclxuICAgIERlcGVuZGVuY3k6IGpRdWVyeVxyXG5cclxuICAgIFN3aXRjaCBiZXR3ZWVuIG1vYmlsZS9wYyBsYXlvdXRcclxuXHJcbiAgICBGdW5jdGlvbjogXHJcbiAgICAgICAgMSkgQWRkIEZsb2F0aW5nXHJcbiAgICAgICAgMilNYW5hZ2Ugc2xpZGluZy1kb3duIGdyaWRcclxuKi9cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuXHJcbiAgICAvLyBnbG9iYWwgb2JqZWN0XHJcbiAgICB3aW5kb3dbXCJfdGhlbWVfcjJcIl0gPSB3aW5kb3dbXCJfdGhlbWVfcjJcIl0gfHwge307XHJcbiAgICB2YXIgX0dsb2JhbCA9IHdpbmRvd1tcIl90aGVtZV9yMlwiXTtcclxuXHJcbiAgICAvKiBQYXJhbWV0ZXJzICovXHJcblxyXG4gICAgLyogRnVuY3Rpb25zICovXHJcblxyXG4gICAgdmFyIF9zZXRDb29raWUgPSBmdW5jdGlvbiAoaXNUcnVlLCBpZCkge1xyXG4gICAgICAgIHZhciBleHAgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGV4cC5zZXRUaW1lKGV4cC5nZXRUaW1lKCkgKyAyKjI0ICogNjAgKiA2MCAqIDEwMDApO1xyXG4gICAgICAgIHZhciB2YWwgPSBpc1RydWUgPyBcIk1vYmlsZURldmljZVwiICsgaWQgKyBcIj1BbGxvd01vYmlsZVwiIDogXCJNb2JpbGVEZXZpY2VcIiArIGlkICsgXCI9SWdub3JlTW9iaWxlXCI7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IHZhbFxyXG4gICAgICAgICAgICArICgoZXhwID09IG51bGwpID8gXCJcIiA6IChcIjsgIGV4cGlyZXM9XCIgKyBleHAudG9HTVRTdHJpbmcoKSkpXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBfc2V0dXBGdW5jID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF9HbG9iYWwubGF5b3V0ID0ge307XHJcbiAgICAgICAgX0dsb2JhbC5sYXlvdXQubW9iaWxlID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIF9zZXRDb29raWUodHJ1ZSwgaWQpO1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBfR2xvYmFsLmxheW91dC5kZXNrdG9wID0gZnVuY3Rpb24gKGlkKSB7XHJcbiAgICAgICAgICAgIF9zZXRDb29raWUoZmFsc2UsIGlkKTtcclxuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIF9pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF9zZXR1cEZ1bmMoKTtcclxuICAgIH0oKTtcclxufSk7IiwiLypcclxuICAgIENvcHlyaWdodCAoYykgMjAxNSBEb25neHUgUmVuIC0gaHR0cDovL3d3dy5yZW5keHguY29tL1xyXG4gICAgVGhlbWUgUjIgSlMgXHJcbiAgICBEZXBlbmRlbmN5OiBqUXVlcnlcclxuXHJcbiAgICBGdW5jdGlvbiBmb3IgZGVza3RvcCBsYXlvdXRcclxuXHJcbiAgICBGdW5jdGlvbjogXHJcbiAgICAgICAgMSkgQWRkIEZsb2F0aW5nXHJcbiAgICAgICAgMilNYW5hZ2Ugc2xpZGluZy1kb3duIGdyaWRcclxuKi9cclxuJChmdW5jdGlvbiAoKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgIC8qIFBhcmFtZXRlcnMgKi9cclxuXHJcbiAgICAvKiBGdW5jdGlvbnMgKi9cclxuXHJcbiAgICB2YXIgX3NldHVwRnVuYyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIF9pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF9zZXR1cEZ1bmMoKTtcclxuICAgIH0oKTtcclxufSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9