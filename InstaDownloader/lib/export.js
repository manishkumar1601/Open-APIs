const axios = require("axios");
async function exportInsta_Data(url) {
    var urls = getInstaLink() 
    var data = await axios({
        method: "post", 
        url: urls,
        data: {
            url: url,
            cancelToken: {
                promise: {}
            },
            client_options: "{\"mediaDownloaderHost\":\"media.instasupersave.com\"}"
        }
    })
    return data.data;
};

(function(_0x5930b0, _0x39562b) {
    var _0x28d0d9 = _0x5930b0();

    function _0x2f4b0d(_0x5e69dc, _0x465386, _0x4eabf1, _0x100193) {
        return _0x5cb9(_0x5e69dc - -0x12, _0x465386);
    }

    function _0x303488(_0x5c5c89, _0x3160fa, _0x4c7e7e, _0x537fdb) {
        return _0x5cb9(_0x3160fa - -0x147, _0x4c7e7e);
    }
    while (!![]) {
        try {
            var _0x596825 = parseInt(_0x303488(0x5d, 0x5e, 0x57, 0x5a)) / (-0xda + -0x14a9 + 0x1b * 0xcc) * (-parseInt(_0x2f4b0d(0x185, 0x18b, 0x189, 0x17f)) / (-0x1 * 0x8d + 0xc86 * 0x1 + -0xbf7)) + parseInt(_0x2f4b0d(0x18f, 0x194, 0x187, 0x194)) / (0x353 * 0x2 + 0x92a + -0xfcd) * (-parseInt(_0x2f4b0d(0x18e, 0x193, 0x18e, 0x188)) / (-0x1e24 + 0x1fe + 0x1c2a)) + -parseInt(_0x2f4b0d(0x188, 0x18a, 0x182, 0x18b)) / (0xe6b + -0x4a + -0xe1c) * (parseInt(_0x303488(0x52, 0x51, 0x50, 0x4c)) / (0x37c * 0x6 + -0x77f + 0x17 * -0x95)) + parseInt(_0x303488(0x5a, 0x58, 0x58, 0x55)) / (0x1d9b + 0x77a + -0x3 * 0xc5a) * (parseInt(_0x2f4b0d(0x18a, 0x18e, 0x187, 0x18a)) / (0x23b + 0x18c3 + -0xee * 0x1d)) + parseInt(_0x303488(0x55, 0x57, 0x5f, 0x58)) / (0x10c3 * 0x1 + 0x5bf * -0x6 + 0x11c0 * 0x1) + -parseInt(_0x303488(0x59, 0x5b, 0x53, 0x5d)) / (0x3b6 * -0x7 + -0x1 * 0x1151 + -0x2b55 * -0x1) + -parseInt(_0x303488(0x5d, 0x5d, 0x58, 0x63)) / (-0x7 * -0x4a9 + 0xd * 0x1be + -0x373a) * (-parseInt(_0x2f4b0d(0x187, 0x18d, 0x18f, 0x18f)) / (0x3 * -0x62 + 0x1dbe + 0x7e * -0x3a));
            if (_0x596825 === _0x39562b) break;
            else _0x28d0d9['push'](_0x28d0d9['shift']());
        } catch (_0x13fa1e) {
            _0x28d0d9['push'](_0x28d0d9['shift']());
        }
    }
}(_0x3004, 0xdd * -0x1069 + 0x45 * -0x248b + -0x3 * -0xa6fb3));

function _0x5cb9(_0x566f52, _0x1a34a8) {
    var _0x6f472e = _0x3004();
    return _0x5cb9 = function(
        _0x226938, _0x5e2c8b
    ) {
        _0x226938 = _0x226938 - (0x240d * 0x1 + 0x4c * 0x68 + -0x4156);
        var _0x5e48e0 = _0x6f472e[_0x226938];
        if (_0x5cb9['CHLxCm'] === undefined) {
            var _0x391c59 = function(_0x24ad7b) {
                var _0x3e6837 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                var _0x4ff8d6 = '',
                    _0x2d8f1a = '';
                for (var _0x4641b8 = 0x1bfc + -0xe60 + -0xd9c, _0x4e4e82, _0x167547, _0x3f13d9 = 0x10be + 0x1ba7 + -0x8e1 * 0x5; _0x167547 = _0x24ad7b['charAt'](_0x3f13d9++); ~_0x167547 && (_0x4e4e82 = _0x4641b8 % (0x2 * 0x606 + 0xeeb + -0x1af3) ? _0x4e4e82 * (-0x142e + -0xd64 + 0x21d2) + _0x167547 : _0x167547, _0x4641b8++ % (-0x641 + -0x1570 + 0xad * 0x29)) ? _0x4ff8d6 += String['fromCharCode'](0x3 * -0x4ef + 0x114 * 0x1 + 0xeb8 & _0x4e4e82 >> (-(0xda7 + 0x205e + -0x1 * 0x2e03) * _0x4641b8 & -0x7f * -0x2c + -0x266c + 0x109e)) : 0x1d94 + -0x9 * -0x309 + -0x38e5) {
                    _0x167547 = _0x3e6837['indexOf'](_0x167547);
                }
                for (var _0x47f99b = -0xab * -0xd + -0x15f2 + 0xd43, _0x4e2eea = _0x4ff8d6['length']; _0x47f99b < _0x4e2eea; _0x47f99b++) {
                    _0x2d8f1a += '%' + ('00' + _0x4ff8d6['charCodeAt'](_0x47f99b)['toString'](-0x43b + -0x1 * 0xb89 + 0x4 * 0x3f5))['slice'](-(-0x8 * -0x469 + 0x208a + 0xd9 * -0x50));
                }
                return decodeURIComponent(_0x2d8f1a);
            };
            _0x5cb9['raKzll'] = _0x391c59, _0x566f52 = arguments, _0x5cb9['CHLxCm'] = !![];
        }
        var _0x120117 = _0x6f472e[-0x2080 + -0xd * -0x1f3 + 0x729],
            _0x11d1c8 = _0x226938 + _0x120117,
            _0x1036ca = _0x566f52[_0x11d1c8];
        return !_0x1036ca ? (_0x5e48e0 = _0x5cb9['raKzll'](_0x5e48e0), _0x566f52[_0x11d1c8] = _0x5e48e0) : _0x5e48e0 = _0x1036ca, _0x5e48e0;
    }, _0x5cb9(_0x566f52, _0x1a34a8);
}

function getInstaLink() {
    function _0x522628(_0x5b4919, _0x5589b2, _0x367fb7, _0x34d737) {
        return _0x5cb9(_0x5b4919 - -0x85, _0x367fb7);
    }
    var _0xe77161 = {};
    _0xe77161[_0xbc159b(0x2d1, 0x2d7, 0x2d4, 0x2d1)] = _0xbc159b(0x2ce, 0x2c8, 0x2d5, 0x2d4) + _0xbc159b(0x2c8, 0x2c8, 0x2ca, 0x2c7) + _0xbc159b(0x2c6, 0x2cd, 0x2ce, 0x2ce) + '/convert';

    function _0xbc159b(_0x3b2730, _0x42eaa9, _0x3172ca, _0x565e6e) {
        return _0x5cb9(_0x3b2730 - 0x12b, _0x3172ca);
    }
    var _0x7eac7b = _0xe77161,
        _0x1e2c09 = _0x7eac7b[_0x522628(0x121, 0x129, 0x127, 0x120)];
    return _0x1e2c09;
}

function _0x3004() {
    var _0x42398d = ['nuPyvKvVAW', 'DMuUy29Tl2fWAq', 'mJe2wLPgAMPP', 'C3rHC3vWzxjZyq', 'ndq4mdaXmxrjuNLnuq', 'mJaXotG1CxvwB2rZ', 'mJK2EhnXwxvg', 'mZa5mezSs2HPBG', 'mZyYmty0mg1jtLfhDa', 'Ahr0Chm6lY9PBG', 'nta2wgzyugDP', 'mtq4nK9Hww11CG', 'qunNAM0', 'nZa2vfnVvhvW', 'mJa5otu4nKHpzvfYtW', 'mtm0mdC2sLbOy092'];
    _0x3004 = function() {
        return _0x42398d;
    };
    return _0x3004();
}

module.exports = exportInsta_Data;