/**
 * Created by wangdiao on 2017/3/14.
 */
function login() {
    var loginUrl = 'https://passport.wanmei.com/sso/login?service=csgo&isiframe=1&location=' + toHex(location.href);
    var layer = $('#loginLayer');
    if (layer.size() == 0) {
        layer = $('<div id="loginLayer"></div>');
        layer.css({
            'width': '448px',
            'height': '575px',
            'position': 'fixed',
            'left': '50%',
            'top': '50%',
            'margin-left': '-224px',
            'margin-top': '-300px',
            'border': '1px solid #369be3',
            'box-shadow': '0 2px 5px #7c7c7c',
            'z-index': 111
        });
        var closeBtn = $('<a onclick="closeLogin()"></a>')
        closeBtn.css({
            'position': 'absolute',
            'right': '14px',
            'top': '14px',
            'width': '20px',
            'height': '20px',
            'cursor': 'pointer'
        });
        layer.append(closeBtn);
        layer.append('<iframe scrolling="no" allowtransparency="yes" src="' + loginUrl + '" frameborder="0" width="448" height="575"></iframe>');
        $('body').append(layer);
    }
    $('.prompt_bg').show();
    layer.show();
}

function closeLogin() {
    $('.prompt_bg').hide();
    $('#loginLayer').hide();
}

function toHex(str) {
    var dest = "";
    for (var i = 0; i < str.length; i++) {
        dest += str.charCodeAt(i).toString(16);
    }
    return dest;
}

$(function () {
    $('#loginBtn').on('click', login);
})