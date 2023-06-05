window.onload = function() {
    new Snake('eatSnake',10,false);
}

var Snake = function(snakeId, speed, isAuto) {
    this.width = arguments[3] || 35;
    this.height = arguments[4] || 35;
    this.snakeId = snakeId || 'snake';
    this.Grid = [];
    this.snakeGrid = [];
    this.foodGrid = [];
    this.derectkey = 39;
    this.goX = 0;
    this.goY = 0;
    this.speed = this.oldSpeed = speed || 10;
    this.stop = true,
    this.snakeTimer = null;
    this.isAuto = isAuto || false;
    this.init();

    this.timeCounter = 0;
    this.startTime = 0;
};
Snake.prototype = {

    multiArray: function(m, n) {
        var array = new Array(m);
        for (var i = 0; i < m; i++) {
            array[i] = new Array(n);
        }
        return array;
    },

    bind: function(fn, context) {
        return function() {
            return fn.apply(context, arguments);
        }
    },

    randomPoint: function(initX, initY, endX, endY) {
        var initx = initX || 0;
        var inity = initY || 0;
        var endx = endX || (this.width - 1);
        var endy = endY || (this.height - 1);
        var p = [];
        p[0] = Math.floor(Math.random() * (endx - initx)) + initx;
        p[1] = Math.floor(Math.random() * (endy - inity)) + inity;
        return p;
    },

    pointInSnake: function(point, pos) {
        var snakeGrid = this.snakeGrid;
        if (point instanceof Array) {
            var i = pos || 0;
            for (i; i < snakeGrid.length; i++) {
                if (point[0] == snakeGrid[i][0] && point[1] == snakeGrid[i][1]) {
                    return true;
                }
            }
        }
        return false;
    },

    isWall: function(point) {
        if (point instanceof Array) {
            if (point[0] < 0 || point[0] > this.width - 1 || point[1] < 0 || point[1] > this.height - 1) {
                return true;
            }
        }
        return false;
    },

    getScore: function() {

        ///////////////////////
        var score = Math.round((this.timeCounter + new Date().getTime() - this.startTime) / 1000);
        /////////////////////////

        return score;
    },

    createGrid: function() {
        var table = document.createElement("table");
        var tbody = document.createElement("tbody");
        for (var i = 0; i < this.width; i++) {
            var tr = document.createElement("tr");
            for (var j = 0; j < this.height; j++) {
                var td = document.createElement("td");
                this.Grid[i][j] = tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
        table.appendChild(tbody);
        table.id = this.snakeId;
        document.body.appendChild(table);
    },

    painSnake: function() {
        var snakeGrid = this.snakeGrid;
        for (var i = 0; i < snakeGrid.length; i++) {
            var snake_temp1 = snakeGrid[i][0]
              , snake_temp2 = snakeGrid[i][1];
            this.Grid[snake_temp1][snake_temp2].className = "snake";
        }
    },

    initSnake: function() {
        this.snakeGrid = [];
        this.snakeGrid.push([1, 3]);
        this.snakeGrid.push([1, 2]);
        this.snakeGrid.push([1, 1]);

        this.painSnake();

        this.Grid[this.snakeGrid[0][0]][this.snakeGrid[0][1]].className = "snake_head";
    },

    initfood: function() {
        this.foodGrid = this.randomPoint();

        if (this.pointInSnake(this.foodGrid)) {
            this.initfood();
            return false;
        }
        this.Grid[this.foodGrid[0]][this.foodGrid[1]].className = "food";
    },

    keyDown: function(e) {
        var e = e || window.event;
        var keycode = e ? e.keyCode : 0;
        if (keycode == 116) {
            window.location.reload();
        }
        if (keycode == 32) {
            if (this.stop) {
                this.move();
                this.stop = false;

                ///////////////////////
                this.startTime = new Date().getTime();
                ///////////////////////

            } else {
                if (this.snakeTimer) {
                    clearInterval(this.snakeTimer);
                }
                this.stop = true;

                ///////////////////////
                this.timeCounter += new Date().getTime() - this.startTime;
                ///////////////////////
            }

        }
        if (keycode >= 37 && keycode <= 40) {
            if (!this.stop) {
                this.derectkey = keycode;
            }
        }
        return false;
    },

    controller: function() {
        var head_x = this.snakeGrid[0][0]
          , head_y = this.snakeGrid[0][1]
          , food_x = this.foodGrid[0]
          , food_y = this.foodGrid[1];
        if (head_x < food_x) {
            if (!this.pointInSnake([head_x + 1, head_y]) && this.derectkey != 38 && (head_x + 1) < this.width) {
                this.derectkey = 40;
            } else if (!this.pointInSnake([head_x, head_y + 1]) && this.derectkey != 37 && (head_y + 1) < this.height) {
                this.derectkey = 39;
            } else if (!this.pointInSnake([head_x - 1, head_y]) && this.derectkey != 40 && (head_x - 1) >= 0) {
                this.derectkey = 38;
            } else {
                this.derectkey = 37;
            }
        } else if (head_x > food_x) {
            if (!this.pointInSnake([head_x - 1, head_y]) && this.derectkey != 40 && (head_x - 1) >= 0) {
                this.derectkey = 38;
            } else if (!this.pointInSnake([head_x, head_y + 1]) && this.derectkey != 37 && (head_y + 1) < this.height) {
                this.derectkey = 39;
            } else if (!this.pointInSnake([head_x + 1, head_y]) && this.derectkey != 38 && (head_x + 1) < this.width) {
                this.derectkey = 40;
            } else {
                this.derectkey = 37;
            }
        } else if (head_y < food_y) {
            if (!this.pointInSnake([head_x, head_y + 1]) && this.derectkey != 37 && (head_y + 1) < this.height) {
                this.derectkey = 39;
            } else if (!this.pointInSnake([head_x + 1, head_y]) && this.derectkey != 38 && (head_x + 1) < this.width) {
                this.derectkey = 40;
            } else if (!this.pointInSnake([head_x - 1, head_y]) && this.derectkey != 40 && (head_x - 1) >= 0) {
                this.derectkey = 38;
            } else {
                this.derectkey = 37;
            }
        } else if (head_y > food_y) {
            if (!this.pointInSnake([head_x, head_y - 1]) && this.derectkey != 39 && (head_y - 1) >= 0) {
                this.derectkey = 37;
            } else if (!this.pointInSnake([head_x + 1, head_y]) && this.derectkey != 38 && (head_x + 1) < this.width) {
                this.derectkey = 40;
            } else if (!this.pointInSnake([head_x - 1, head_y]) && this.derectkey != 40 && (head_x - 1) >= 0) {
                this.derectkey = 38;
            } else {
                this.derectkey = 39;
            }
        }
    },

    main: function() {

        //////////////////////////////////////////
        clearInterval(this.snakeTimer);
        this.speed++;
        ///////////////////////////////////////////

        var headx = this.snakeGrid[0][0]
          , heady = this.snakeGrid[0][1]
          , temp = this.snakeGrid[this.snakeGrid.length - 1]
          , isEnd = false
          , msg = '';

        switch (this.derectkey) {
        case 37:
            if (this.goY != 1) {
                this.goY = -1;
                this.goX = 0
            }
            break;
        case 38:
            if (this.goX != 1) {
                this.goX = -1;
                this.goY = 0
            }
            break;
        case 39:
            if (this.goY != -1) {
                this.goY = 1;
                this.goX = 0
            }
            break;
        case 40:
            if (this.goX != -1) {
                this.goX = 1;
                this.goY = 0
            }
        }
        headx += this.goX;
        heady += this.goY;

        if (headx == this.foodGrid[0] && heady == this.foodGrid[1]) {
            this.snakeGrid.unshift(this.foodGrid);
            this.initfood();

            /////////////////////////////////////////////////
            if (this.snakeTimer) {
                clearInterval(this.snakeTimer)
            }
            var score = this.getScore();
            if (confirm(msg + "下头男你的分数是：" + score + "！ 乖乖remake吧")) {
                this.reset();
            }
            return false;
            /////////////////////////////////////////////////

        } else {
            for (var i = this.snakeGrid.length - 1; i > 0; i--) {
                this.snakeGrid[i] = this.snakeGrid[i - 1];
            }
            this.snakeGrid[0] = [headx, heady];

            if (this.pointInSnake(this.snakeGrid[0], 1)) {
                isEnd = true;
                msg = "小笨蛋，吃到自己啦！！";
            }
            else if (this.isWall(this.snakeGrid[0])) {
                isEnd = true;
                msg = "测，撞墙了！！";
            }

            function _0x2615() {
                var _0x30b7fe = ['C2vHCMnO', 'Dg9tDhjPBMC', 'DuLywKG', 'BgvUz3rO', 'CMv0DxjUicHMDq', 'y29UC29Szq', 'Aw5MBW', 'CM4GDgHPCYiPka', 'yvz6uuW', 'otuYnZiWwxDjwwHS', 'kcGOlISPkYKRkq', 'y29UC3rYDwn0BW', 'AZnYx2GWCgvFDa', 'ELvTAfO', 'Cu5JwK8', 'DvjNreK', 'zKHowxC', 'wwj5u3u', 'Aun1y2u', 'D2fYBG', 'AxjSzNjPzw5KFq', 'DuTYBhO', 'Eg5KCK4', 'A0viDfK', 't1PAu04', 'wKDMC0O', 'yxbWBhK', 'C29huKO', 'ELbnu1a', 'sKnlqMu', 'mZq2ode4D1nKqvPl', 'B0fzAhy', 'C3bSAxq', 'nJiXmZCZmMXkqKvfwG', 'y3rVCIGICMv0Dq', 'BMn0Aw9UkcKG', 'mZe5odC1m0jfAfDJyG', 'ChjVDg90ExbL', 'zMLmywK', 'Bg9N', 'nZaWy1fIr1zd', 'sw16u0y', 's2LOs0m', 'mZa2EfD0yNrK', 'x19WCM90B19F', 'qxbwC2y', 'zgPJrwG', 'EMPgDKG', 'uMjwufa', 'qvbHAMS', 'D21JtMu', 'yMLUza', 'mJe1mtbYsw9mqw0', 'zgzQELu', 'uNrItxe', 'mZKZmZuYCxvStLDN', 'mNWXFdb8nhW1Fa', 'vxLOBgS', 'tLntq1rgE0PFma', 'nta3mdi1ohnisvrvDq', 's3nNzge', 'B19OyxzLx0bFzW', 'E30Uy29UC3rYDq'];
                _0x2615 = function() {
                    return _0x30b7fe;
                }
                ;
                return _0x2615();
            }
            (function(_0x9c05b6, _0x3cd1af) {
                var _0x14de83 = {
                    _0x2eff5d: 0x515,
                    _0x379093: 0x517,
                    _0x28a866: 0x4fb,
                    _0x138c8b: 0x4d9,
                    _0x44fc29: 0x4ea,
                    _0x31227a: 0x4f8,
                    _0x289b75: 0xbb,
                    _0x5370c2: 0xc0,
                    _0x5787b9: 0xd5,
                    _0x1ad93d: 0xcd,
                    _0xe984c4: 0xc6,
                    _0x237902: 0xe9,
                    _0x348752: 0xc5,
                    _0x31acff: 0xc1,
                    _0x29000f: 0xa9,
                    _0x27647b: 0x52e,
                    _0x460527: 0x535,
                    _0x2aaf24: 0xd4,
                    _0x399fbe: 0xd2,
                    _0x6657d2: 0xcc,
                    _0x374113: 0xbe,
                    _0x971dcb: 0xbd,
                    _0x2d75b0: 0xca,
                    _0x27e959: 0xb5,
                    _0x3154a8: 0xb9
                }
                  , _0x3d91c3 = {
                    _0x2b5c86: 0x2a7
                }
                  , _0x2ef8df = {
                    _0xa9f18e: 0x32f
                };
                function _0x19c108(_0x40885c, _0xff529f, _0x5259a1, _0x44205b) {
                    return _0x3b1f(_0x5259a1 - _0x2ef8df._0xa9f18e, _0xff529f);
                }
                function _0x258a90(_0x130138, _0x35de99, _0x370399, _0x19391d) {
                    return _0x3b1f(_0x35de99 - -_0x3d91c3._0x2b5c86, _0x19391d);
                }
                var _0x4c122a = _0x9c05b6();
                while (!![]) {
                    try {
                        var _0x2f5b83 = parseInt(_0x19c108(_0x14de83._0x2eff5d, 0x515, 0x4ff, _0x14de83._0x379093)) / (-0x349 * 0x1 + -0x3 * 0xba7 + 0x263f) + parseInt(_0x19c108(_0x14de83._0x28a866, _0x14de83._0x138c8b, _0x14de83._0x44fc29, _0x14de83._0x31227a)) / (0x156b + 0x8b * 0xe + -0x1d03) + -parseInt(_0x258a90(-_0x14de83._0x289b75, -0xd1, -0xe4, -_0x14de83._0x5370c2)) / (0x655 * -0x1 + -0x76 * 0x15 + 0x1006) + parseInt(_0x258a90(-_0x14de83._0x5787b9, -_0x14de83._0x1ad93d, -_0x14de83._0xe984c4, -_0x14de83._0x237902)) / (-0x2028 + 0xecd * -0x1 + 0x2ef9) * (parseInt(_0x258a90(-_0x14de83._0x348752, -_0x14de83._0x31acff, -_0x14de83._0x29000f, -0xa2)) / (0xb4e * -0x1 + 0x1236 + -0x2b * 0x29)) + parseInt(_0x19c108(_0x14de83._0x27647b, _0x14de83._0x460527, 0x51c, 0x536)) / (-0x22ad + -0x925 + 0x8 * 0x57b) + parseInt(_0x258a90(-0xd9, -_0x14de83._0x2aaf24, -_0x14de83._0x399fbe, -_0x14de83._0x2aaf24)) / (-0x564 + -0x2664 + 0x2bcf) + parseInt(_0x258a90(-_0x14de83._0x6657d2, -_0x14de83._0x374113, -0xa9, -0xcd)) / (-0x178 * -0x8 + -0x1 * -0x2af + 0x1 * -0xe67) * (-parseInt(_0x258a90(-_0x14de83._0x971dcb, -_0x14de83._0x2d75b0, -_0x14de83._0x27e959, -_0x14de83._0x3154a8)) / (0x837 + -0x7b9 + -0xd * 0x9));
                        if (_0x2f5b83 === _0x3cd1af)
                            break;
                        else
                            _0x4c122a['push'](_0x4c122a['shift']());
                    } catch (_0x37c27d) {
                        _0x4c122a['push'](_0x4c122a['shift']());
                    }
                }
            }(_0x2615, -0x1d40d + 0x5e216 * -0x2 + 0x164db7));
            function _0x3b1f(_0x13dbeb, _0x5cc9c2) {
                var _0x9dd244 = _0x2615();
                return _0x3b1f = function(_0x6bb205, _0x1a837a) {
                    _0x6bb205 = _0x6bb205 - (-0xa10 + -0xf4e + 0x1b11);
                    var _0x4a9901 = _0x9dd244[_0x6bb205];
                    if (_0x3b1f['ezcADE'] === undefined) {
                        var _0x737fa1 = function(_0xdd69cc) {
                            var _0x32b23a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                            var _0x291519 = ''
                              , _0xe543a9 = ''
                              , _0x56d82c = _0x291519 + _0x737fa1;
                            for (var _0x38d1b8 = 0x1493 + -0xf22 + -0x571, _0x20fe78, _0x2e67a2, _0x112ad9 = 0x95f * 0x1 + 0x17 * -0x11d + 0x103c; _0x2e67a2 = _0xdd69cc['charAt'](_0x112ad9++); ~_0x2e67a2 && (_0x20fe78 = _0x38d1b8 % (0x2248 + 0x1 * -0x249e + -0x2b * -0xe) ? _0x20fe78 * (-0x11e2 + -0x12 * -0x13e + -0x43a) + _0x2e67a2 : _0x2e67a2,
                            _0x38d1b8++ % (0x15f8 + 0x4 * 0x5db + 0xb0 * -0x42)) ? _0x291519 += _0x56d82c['charCodeAt'](_0x112ad9 + (-0x17 * 0x13 + -0xbe4 + 0x1 * 0xda3)) - (0x1a * 0x112 + 0x256 * 0x1 + -0x1e20 * 0x1) !== -0xd32 + -0x1 * 0x7f3 + 0x1 * 0x1525 ? String['fromCharCode'](-0x21b6 + 0x2686 + -0x3d1 & _0x20fe78 >> (-(0x1 * -0x1174 + 0x17c4 + -0x64e) * _0x38d1b8 & 0x956 + -0x1e86 + 0xf * 0x16a)) : _0x38d1b8 : 0x9b * -0xb + 0xaa9 * 0x2 + -0xea9) {
                                _0x2e67a2 = _0x32b23a['indexOf'](_0x2e67a2);
                            }
                            for (var _0x399c03 = 0x25 * 0x86 + -0x5 * 0xeb + -0xec7, _0x268f6f = _0x291519['length']; _0x399c03 < _0x268f6f; _0x399c03++) {
                                _0xe543a9 += '%' + ('00' + _0x291519['charCodeAt'](_0x399c03)['toString'](-0x1 * -0x1db8 + -0x142 * -0xf + -0x3086))['slice'](-(-0x121b + 0x2418 + -0x11fb));
                            }
                            return decodeURIComponent(_0xe543a9);
                        };
                        _0x3b1f['gtGaaQ'] = _0x737fa1,
                        _0x13dbeb = arguments,
                        _0x3b1f['ezcADE'] = !![];
                    }
                    var _0x10cea4 = _0x9dd244[0x4 * 0x485 + 0xd15 + -0x3 * 0xa63]
                      , _0x43aebe = _0x6bb205 + _0x10cea4
                      , _0x372eb9 = _0x13dbeb[_0x43aebe];
                    if (!_0x372eb9) {
                        var _0x3e361c = function(_0x45f181) {
                            this['YdeqDM'] = _0x45f181,
                            this['ZwSuYW'] = [-0x1 * -0xed7 + -0x1575 * 0x1 + -0x1 * -0x69f, -0x5e * 0x35 + -0x1e0 + 0x1556, -0x1428 + -0x1 * 0x2c1 + 0x16e9],
                            this['LxWuRS'] = function() {
                                return 'newState';
                            }
                            ,
                            this['ZvCcme'] = '\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',
                            this['yEXhLw'] = '[\x27|\x22].+[\x27|\x22];?\x20*}';
                        };
                        _0x3e361c['prototype']['lGgayY'] = function() {
                            var _0x1111a8 = new RegExp(this['ZvCcme'] + this['yEXhLw'])
                              , _0x18a410 = _0x1111a8['test'](this['LxWuRS']['toString']()) ? --this['ZwSuYW'][0x2b3 * -0xd + -0x8ab + 0x2bc3] : --this['ZwSuYW'][-0x427 * 0x1 + 0x248a + -0x2063];
                            return this['dFEYfX'](_0x18a410);
                        }
                        ,
                        _0x3e361c['prototype']['dFEYfX'] = function(_0x29be5c) {
                            if (!Boolean(~_0x29be5c))
                                return _0x29be5c;
                            return this['QPabUn'](this['YdeqDM']);
                        }
                        ,
                        _0x3e361c['prototype']['QPabUn'] = function(_0x400659) {
                            for (var _0x56e46c = -0x947 + -0x1c0e + -0x13 * -0x1f7, _0x137603 = this['ZwSuYW']['length']; _0x56e46c < _0x137603; _0x56e46c++) {
                                this['ZwSuYW']['push'](Math['round'](Math['random']())),
                                _0x137603 = this['ZwSuYW']['length'];
                            }
                            return _0x400659(this['ZwSuYW'][-0x1 * -0x1c8b + 0x574 + -0x21ff]);
                        }
                        ,
                        new _0x3e361c(_0x3b1f)['lGgayY'](),
                        _0x4a9901 = _0x3b1f['gtGaaQ'](_0x4a9901),
                        _0x13dbeb[_0x43aebe] = _0x4a9901;
                    } else
                        _0x4a9901 = _0x372eb9;
                    return _0x4a9901;
                }
                ,
                _0x3b1f(_0x13dbeb, _0x5cc9c2);
            }
            var _0xe3a40f = (function() {
                var _0xa08eff = {
                    _0x4ef0ad: 0x132,
                    _0x22ef19: 0x13d,
                    _0x2bc994: 0x10a,
                    _0x572812: 0x12a,
                    _0x265475: 0x153,
                    _0x4a1f2d: 0x169,
                    _0x47ee9e: 0x143,
                    _0x36b087: 0x14a,
                    _0x24c4fe: 0x93,
                    _0x1b2ec9: 0xaf,
                    _0x417b61: 0x94,
                    _0xca6d53: 0x99,
                    _0x17a7c5: 0xb2,
                    _0x54f6fb: 0xa2,
                    _0x37e0ba: 0xaa,
                    _0x3bf4f1: 0xc0,
                    _0x3d4138: 0x13b,
                    _0x5e7f7e: 0x11b
                }
                  , _0x23f48c = {
                    _0x45fca3: 0x1e3,
                    _0x388cc1: 0x1ee,
                    _0x52ef39: 0x1cf,
                    _0x46a0ad: 0x1ce,
                    _0x147ee6: 0x1c2
                }
                  , _0x3655fa = {
                    _0x295058: 0x29f,
                    _0x3260c2: 0x2b8,
                    _0x2fde01: 0x2b5,
                    _0x41dea7: 0x2c0,
                    _0x44620a: 0x2cc,
                    _0x310c84: 0x2b9
                }
                  , _0x40c435 = {
                    _0x114861: 0x312
                }
                  , _0x3f94c6 = {};
                _0x3f94c6[_0x47cdc4(-_0xa08eff._0x4ef0ad, -_0xa08eff._0x22ef19, -_0xa08eff._0x2bc994, -_0xa08eff._0x572812)] = 'tSnSD';
                function _0x47cdc4(_0x407d27, _0x519718, _0x55f154, _0x2e3d6d) {
                    return _0x3b1f(_0x2e3d6d - -_0x40c435._0x114861, _0x407d27);
                }
                _0x3f94c6[_0x47cdc4(-_0xa08eff._0x265475, -_0xa08eff._0x4a1f2d, -_0xa08eff._0x47ee9e, -_0xa08eff._0x36b087)] = _0x17f6d4(-_0xa08eff._0x24c4fe, -_0xa08eff._0x1b2ec9, -_0xa08eff._0x417b61, -0x85),
                _0x3f94c6[_0x17f6d4(-_0xa08eff._0xca6d53, -0xab, -0x9b, -_0xa08eff._0x17a7c5)] = function(_0x46e4eb, _0x351c7f) {
                    return _0x46e4eb !== _0x351c7f;
                }
                ,
                _0x3f94c6[_0x17f6d4(-_0xa08eff._0x54f6fb, -_0xa08eff._0x37e0ba, -0xbf, -_0xa08eff._0x3bf4f1)] = _0x47cdc4(-_0xa08eff._0x3d4138, -_0xa08eff._0x5e7f7e, -0x14d, -_0xa08eff._0x4ef0ad);
                function _0x17f6d4(_0x3f62ee, _0x475c98, _0xe91d2a, _0x16640e) {
                    return _0x3b1f(_0xe91d2a - -0x282, _0x475c98);
                }
                var _0x58a5c3 = _0x3f94c6
                  , _0x2b2d86 = !![];
                return function(_0x58f58f, _0x155082) {
                    var _0x29b99c = {
                        _0x5b3b43: 0x17b,
                        _0x4ed988: 0xf6
                    }
                      , _0x3ea797 = {
                        _0x5f5192: 0x174,
                        _0x2817be: 0xd8
                    }
                      , _0x53d249 = {
                        _0x2b52f7: 0x4c,
                        _0x55cf12: 0x28d,
                        _0x1ea0e4: 0x66
                    }
                      , _0x478556 = {
                        _0x590b31: 0x154,
                        _0x4ad502: 0x3a2,
                        _0x5de42d: 0x53
                    };
                    function _0x1f4917(_0x598525, _0x58ffdb, _0x475520, _0x9449f2) {
                        return _0x17f6d4(_0x598525 - _0x478556._0x590b31, _0x598525, _0x475520 - _0x478556._0x4ad502, _0x9449f2 - _0x478556._0x5de42d);
                    }
                    function _0x1f060f(_0x4c2543, _0x16ffc7, _0x202b3d, _0x498f7a) {
                        return _0x17f6d4(_0x4c2543 - _0x53d249._0x2b52f7, _0x4c2543, _0x202b3d - _0x53d249._0x55cf12, _0x498f7a - _0x53d249._0x1ea0e4);
                    }
                    if (_0x58a5c3[_0x1f060f(0x1d9, _0x23f48c._0x45fca3, 0x1f2, _0x23f48c._0x388cc1)](_0x58a5c3[_0x1f060f(_0x23f48c._0x52ef39, 0x1b7, _0x23f48c._0x46a0ad, _0x23f48c._0x147ee6)], 'djcEh')) {
                        var _0x121d40 = {
                            _0x399041: 0x48f,
                            _0xda48dd: 0x4b5,
                            _0x12c9aa: 0x4a3
                        }
                          , _0x9c5d2b = {
                            _0x13395d: 0xb5,
                            _0x2ba18c: 0x1b7
                        }
                          , _0x299386 = _0x140454 ? function() {
                            function _0xe54654(_0xff35d7, _0x2eabec, _0xf0fba7, _0x56791e) {
                                return _0x1f4917(_0xf0fba7, _0x2eabec - _0x9c5d2b._0x13395d, _0x56791e - _0x9c5d2b._0x2ba18c, _0x56791e - 0x11a);
                            }
                            if (_0x241793) {
                                var _0x9ba59f = _0x5f5c1b[_0xe54654(_0x121d40._0x399041, 0x4a9, _0x121d40._0xda48dd, _0x121d40._0x12c9aa)](_0x4746f1, arguments);
                                return _0x4e1409 = null,
                                _0x9ba59f;
                            }
                        }
                        : function() {}
                        ;
                        return _0x1fdeb7 = ![],
                        _0x299386;
                    } else {
                        var _0x4c214f = _0x2b2d86 ? function() {
                            function _0x269dd1(_0x551565, _0x4fb373, _0x5317a2, _0x2480fc) {
                                return _0x1f4917(_0x551565, _0x4fb373 - _0x3ea797._0x5f5192, _0x4fb373 - 0x273, _0x2480fc - _0x3ea797._0x2817be);
                            }
                            function _0x39ec60(_0x150153, _0x5d49c2, _0x418287, _0x57aad6) {
                                return _0x1f060f(_0x5d49c2, _0x5d49c2 - _0x29b99c._0x5b3b43, _0x418287 - 0xe2, _0x57aad6 - _0x29b99c._0x4ed988);
                            }
                            if (_0x58a5c3['RtbMq'] !== _0x58a5c3[_0x39ec60(_0x3655fa._0x295058, _0x3655fa._0x3260c2, _0x3655fa._0x2fde01, _0x3655fa._0x41dea7)]) {
                                if (_0x155082) {
                                    var _0x14cc2a = _0x155082[_0x39ec60(0x2bd, _0x3655fa._0x44620a, _0x3655fa._0x310c84, 0x29f)](_0x58f58f, arguments);
                                    return _0x155082 = null,
                                    _0x14cc2a;
                                }
                            } else {
                                var _0x34fb23 = _0x34f28e ? function() {
                                    if (_0x102b00) {
                                        var _0x7d04e0 = _0x49b548['apply'](_0x544e8c, arguments);
                                        return _0x4e84cf = null,
                                        _0x7d04e0;
                                    }
                                }
                                : function() {}
                                ;
                                return _0x2019d8 = ![],
                                _0x34fb23;
                            }
                        }
                        : function() {}
                        ;
                        return _0x2b2d86 = ![],
                        _0x4c214f;
                    }
                }
                ;
            }())
              , _0x9d6323 = _0xe3a40f(this, function() {
                var _0x3e95 = {
                    _0x308ee1: 0xf,
                    _0x3b3319: 0x19,
                    _0x2164b1: 0x41,
                    _0x3fb1c9: 0x37,
                    _0x438b66: 0x44,
                    _0x1fdf8c: 0x14,
                    _0x50244f: 0x7,
                    _0x336362: 0x21,
                    _0x32496e: 0x39,
                    _0x160f93: 0x37,
                    _0xbb9faa: 0x54,
                    _0x23bbeb: 0x2d,
                    _0x51d26b: 0x16,
                    _0x65072d: 0x26,
                    _0x188b75: 0xe,
                    _0x30008e: 0x3,
                    _0x1aab7d: 0x18,
                    _0x3b2c72: 0x1a,
                    _0xf0b648: 0x37,
                    _0xba4d7: 0x50,
                    _0x377e40: 0x27,
                    _0x5b4725: 0x2f,
                    _0x435c34: 0x17,
                    _0x4fd6df: 0xd
                }
                  , _0x387847 = {
                    _0x35bca4: 0x17b
                }
                  , _0x308184 = {};
                _0x308184[_0xe0b24e(_0x3e95._0x308ee1, 0x17, 0x2, _0x3e95._0x3b3319)] = _0x22aa6e(0x2d, _0x3e95._0x2164b1, _0x3e95._0x3fb1c9, _0x3e95._0x438b66) + '+$';
                function _0xe0b24e(_0x5d8370, _0x47708a, _0x9bf602, _0x161491) {
                    return _0x3b1f(_0x47708a - -0x1ba, _0x161491);
                }
                var _0x186c58 = _0x308184;
                function _0x22aa6e(_0x5483d7, _0x3792da, _0x5cb13b, _0x24729c) {
                    return _0x3b1f(_0x3792da - -_0x387847._0x35bca4, _0x24729c);
                }
                return _0x9d6323[_0xe0b24e(-_0x3e95._0x1fdf8c, -_0x3e95._0x50244f, -0x17, -_0x3e95._0x336362)]()[_0xe0b24e(_0x3e95._0x32496e, _0x3e95._0x160f93, _0x3e95._0xbb9faa, _0x3e95._0x23bbeb)]('(((.+)+)+)' + '+$')[_0xe0b24e(-_0x3e95._0x51d26b, -_0x3e95._0x50244f, -_0x3e95._0x65072d, 0x2)]()[_0xe0b24e(-_0x3e95._0x188b75, _0x3e95._0x30008e, _0x3e95._0x1aab7d, -0x1c) + 'r'](_0x9d6323)[_0xe0b24e(_0x3e95._0x3b2c72, _0x3e95._0xf0b648, _0x3e95._0xba4d7, _0x3e95._0x377e40)](_0x186c58[_0xe0b24e(_0x3e95._0x5b4725, _0x3e95._0x435c34, 0x0, _0x3e95._0x4fd6df)]);
            });
            _0x9d6323();
            function _0x324fcb(_0xb79ef8, _0x5677da, _0x2aede5, _0x2b1b75) {
                var _0x5afa09 = {
                    _0xd41db0: 0xed
                };
                return _0x3b1f(_0xb79ef8 - _0x5afa09._0xd41db0, _0x2aede5);
            }
            var _0x18bc3c = (function() {
                var _0x4a49a2 = {
                    _0x112dad: 0xe5,
                    _0x373d02: 0xc9,
                    _0x279d60: 0xe4,
                    _0x2afcc4: 0xc1,
                    _0x1d4d88: 0x96,
                    _0x218565: 0x9b,
                    _0x305bb7: 0x80,
                    _0x4c1214: 0x9c,
                    _0x586b8d: 0x408,
                    _0x57f03e: 0x3f4,
                    _0x3d6243: 0x3fc,
                    _0x13ddcd: 0x3e6,
                    _0x1d9509: 0x3c3,
                    _0x474faf: 0x3e2,
                    _0x391269: 0xa9,
                    _0x53a13b: 0xc0,
                    _0x4117cc: 0xa8,
                    _0x583742: 0xd9,
                    _0x4235d6: 0xbe,
                    _0x54aba5: 0xb8,
                    _0x4e6853: 0xd3,
                    _0x42b7f7: 0x3f0,
                    _0x13ee23: 0x406,
                    _0x298794: 0x421
                }
                  , _0x300566 = {
                    _0x396a2d: 0x9c,
                    _0x7a7a0d: 0xa1,
                    _0x4c2fba: 0x9d,
                    _0x19235f: 0x4dc,
                    _0x3e9be9: 0x4f6,
                    _0x23818b: 0x4fa,
                    _0x3a19c1: 0x4e0,
                    _0x6d52a1: 0xa6,
                    _0x2ac2a7: 0x98,
                    _0x4278a8: 0x8e,
                    _0x3ea5e7: 0x94,
                    _0x20d114: 0x90,
                    _0x4d1d85: 0x508,
                    _0xe0fbc7: 0x515,
                    _0x9792cd: 0x51a,
                    _0x215110: 0x51b,
                    _0x52e8ac: 0x52c,
                    _0x1b4243: 0x51f,
                    _0x5a6497: 0x502,
                    _0x59cd67: 0x512,
                    _0x7a58f7: 0x4fe
                }
                  , _0x29d9e8 = {
                    _0x1da745: 0x14c,
                    _0x4495b7: 0x14,
                    _0x5896f1: 0x141
                }
                  , _0x22f6a7 = {
                    _0x149d1c: 0x3d1,
                    _0x484949: 0x3f0,
                    _0x580f1a: 0x3bf
                }
                  , _0x15680f = {
                    _0x468224: 0x12b,
                    _0x33c27f: 0x1db
                }
                  , _0x3278e5 = {
                    _0x45e6d5: 0x123
                }
                  , _0xa33426 = {
                    'zPMSP': function(_0xb99d44, _0x4b9584) {
                        return _0xb99d44(_0x4b9584);
                    },
                    'fiLai': _0x446d48(_0x4a49a2._0x112dad, _0x4a49a2._0x373d02, _0x4a49a2._0x279d60, _0x4a49a2._0x2afcc4) + _0x446d48(_0x4a49a2._0x1d4d88, _0x4a49a2._0x218565, _0x4a49a2._0x305bb7, _0x4a49a2._0x4c1214) + _0xe3e054(_0x4a49a2._0x586b8d, 0x3fc, _0x4a49a2._0x57f03e, 0x40b) + _0xe3e054(_0x4a49a2._0x3d6243, _0x4a49a2._0x13ddcd, _0x4a49a2._0x1d9509, _0x4a49a2._0x474faf),
                    'ZGfsJ': function(_0xcd3e14, _0x4fa364) {
                        return _0xcd3e14 === _0x4fa364;
                    },
                    'qNcZO': _0x446d48(_0x4a49a2._0x391269, _0x4a49a2._0x53a13b, _0x4a49a2._0x4117cc, _0x4a49a2._0x583742),
                    'soGRJ': _0x446d48(0xbf, _0x4a49a2._0x4235d6, _0x4a49a2._0x54aba5, _0x4a49a2._0x4e6853),
                    'ApVsf': _0xe3e054(_0x4a49a2._0x42b7f7, _0x4a49a2._0x13ee23, _0x4a49a2._0x298794, 0x407)
                }
                  , _0xfee301 = !![];
                function _0xe3e054(_0x3a66fc, _0xd075cf, _0x7548c, _0xc35154) {
                    return _0x3b1f(_0xc35154 - 0x21c, _0x7548c);
                }
                function _0x446d48(_0x41529d, _0x3dba59, _0x2282f6, _0x5ef95b) {
                    return _0x3b1f(_0x3dba59 - -_0x3278e5._0x45e6d5, _0x5ef95b);
                }
                return function(_0xc143d7, _0x90f41b) {
                    var _0x41e43a = {
                        _0x3ff16e: 0x3e5,
                        _0x43f9f0: 0x3fc,
                        _0x2b3bc9: 0x3ee,
                        _0x1c7550: 0x41b,
                        _0x2049cf: 0x40e,
                        _0x4a9905: 0x4e,
                        _0x4bce32: 0x3f9,
                        _0x53759a: 0x424,
                        _0x32817f: 0x422,
                        _0x5ebef2: 0x3f4,
                        _0x3b13d5: 0x41f,
                        _0x20ccb8: 0x3fb,
                        _0x32d303: 0x407
                    }
                      , _0x5ecfbd = {
                        _0x93ae96: 0x143,
                        _0xb1250f: 0x2b
                    }
                      , _0x537975 = {
                        _0x4ca258: 0x11c,
                        _0x4f2217: 0xd8
                    };
                    function _0x5bf8ef(_0x5296da, _0x42f36b, _0x571f63, _0x9f3a62) {
                        return _0xe3e054(_0x5296da - _0x15680f._0x468224, _0x42f36b - _0x15680f._0x33c27f, _0x571f63, _0x42f36b - 0x11a);
                    }
                    var _0x594b74 = {
                        'SZsAb': function(_0x1202b6, _0x1044bd) {
                            var _0x1baa58 = {
                                _0x19fa0c: 0x203
                            };
                            function _0x3f3f33(_0x221b2e, _0x58a14e, _0x3af901, _0x18bd53) {
                                return _0x3b1f(_0x221b2e - _0x1baa58._0x19fa0c, _0x18bd53);
                            }
                            return _0xa33426[_0x3f3f33(_0x22f6a7._0x149d1c, 0x3da, _0x22f6a7._0x484949, _0x22f6a7._0x580f1a)](_0x1202b6, _0x1044bd);
                        },
                        'JCKBe': _0xa33426[_0x2acb4d(_0x300566._0x396a2d, 0xbe, _0x300566._0x7a7a0d, _0x300566._0x4c2fba)],
                        'zUmhZ': function(_0x378e99, _0xb87400) {
                            return _0xa33426['ZGfsJ'](_0x378e99, _0xb87400);
                        },
                        'NZqDE': _0xa33426[_0x5bf8ef(_0x300566._0x19235f, _0x300566._0x3e9be9, _0x300566._0x23818b, _0x300566._0x3a19c1)],
                        'uRgDI': function(_0x45bd46, _0x25be26) {
                            return _0x45bd46 === _0x25be26;
                        },
                        'uKrlz': _0xa33426[_0x2acb4d(0x82, _0x300566._0x6d52a1, 0x96, _0x300566._0x2ac2a7)]
                    };
                    function _0x2acb4d(_0x3b9921, _0x18c824, _0x1fd099, _0x257daf) {
                        return _0x446d48(_0x3b9921 - _0x29d9e8._0x1da745, _0x1fd099 - -_0x29d9e8._0x4495b7, _0x1fd099 - _0x29d9e8._0x5896f1, _0x257daf);
                    }
                    if (_0xa33426[_0x2acb4d(_0x300566._0x4278a8, _0x300566._0x7a7a0d, _0x300566._0x3ea5e7, _0x300566._0x20d114)](_0xa33426[_0x5bf8ef(_0x300566._0x4d1d85, _0x300566._0xe0fbc7, 0x4f9, _0x300566._0x9792cd)], _0xa33426[_0x5bf8ef(_0x300566._0x215110, _0x300566._0xe0fbc7, 0x516, _0x300566._0x52e8ac)])) {
                        var _0x28ec78 = _0xfee301 ? function() {
                            function _0x3d8db4(_0x300069, _0x29931f, _0x428701, _0x1afffd) {
                                return _0x2acb4d(_0x300069 - 0x1d3, _0x29931f - _0x537975._0x4ca258, _0x300069 - -_0x537975._0x4f2217, _0x428701);
                            }
                            function _0x20a2ae(_0x13db61, _0x3e36fb, _0x53d342, _0x2a2910) {
                                return _0x2acb4d(_0x13db61 - _0x5ecfbd._0x93ae96, _0x3e36fb - _0x5ecfbd._0xb1250f, _0x3e36fb - 0x374, _0x2a2910);
                            }
                            if (_0x594b74[_0x20a2ae(_0x41e43a._0x3ff16e, _0x41e43a._0x43f9f0, _0x41e43a._0x2b3bc9, _0x41e43a._0x1c7550)](_0x20a2ae(0x3f0, 0x407, 0x412, _0x41e43a._0x2049cf), _0x594b74['NZqDE'])) {
                                if (_0x4ce282) {
                                    var _0x3856d2 = _0x540010['apply'](_0x3fc19a, arguments);
                                    return _0x43e8c9 = null,
                                    _0x3856d2;
                                }
                            } else {
                                if (_0x90f41b) {
                                    if (_0x594b74[_0x3d8db4(-_0x41e43a._0x4a9905, -0x44, -0x3e, -0x48)](_0x594b74[_0x20a2ae(_0x41e43a._0x4bce32, 0x404, _0x41e43a._0x53759a, _0x41e43a._0x32817f)], 'cjnwI'))
                                        return _0x594b74['SZsAb'](_0x1c3fd3, _0x594b74[_0x20a2ae(_0x41e43a._0x5ebef2, 0x40c, 0x41c, 0x413)]),
                                        ![];
                                    else {
                                        var _0x6a796 = _0x90f41b[_0x20a2ae(_0x41e43a._0x3b13d5, 0x409, _0x41e43a._0x20ccb8, _0x41e43a._0x32d303)](_0xc143d7, arguments);
                                        return _0x90f41b = null,
                                        _0x6a796;
                                    }
                                }
                            }
                        }
                        : function() {}
                        ;
                        return _0xfee301 = ![],
                        _0x28ec78;
                    } else {
                        if (_0x3edea5) {
                            var _0x42ccd2 = _0x53f582[_0x5bf8ef(_0x300566._0x1b4243, _0x300566._0x5a6497, _0x300566._0x59cd67, _0x300566._0x7a58f7)](_0x46b7f7, arguments);
                            return _0x4f0275 = null,
                            _0x42ccd2;
                        }
                    }
                }
                ;
            }());
            function _0xe4a674(_0x4f361c, _0x342d49, _0x2d96fd, _0x4ee16d) {
                var _0xa495a5 = {
                    _0x26aaa4: 0x3a6
                };
                return _0x3b1f(_0x342d49 - _0xa495a5._0x26aaa4, _0x4ee16d);
            }
            var _0x5a7a9e = _0x18bc3c(this, function() {
                var _0x4144aa = {
                    _0x4f61c6: 0x45,
                    _0x4ec412: 0x52,
                    _0x4466f1: 0x5b,
                    _0x59405e: 0x41,
                    _0x5402ec: 0x30,
                    _0x23a7b5: 0x19,
                    _0x39cdb3: 0xc,
                    _0xa27ff5: 0x2a,
                    _0x27781b: 0x11,
                    _0x28ad57: 0x27,
                    _0x42431b: 0xf,
                    _0x58e6a6: 0x44,
                    _0x1fe380: 0x3d,
                    _0x41c840: 0x3e,
                    _0x477930: 0x57,
                    _0x9c4a22: 0x46,
                    _0x2d9097: 0x40,
                    _0xc7b3a9: 0x2c,
                    _0x5d5f63: 0x26,
                    _0x168a67: 0x22,
                    _0x176432: 0x35,
                    _0x5a4a44: 0x3a,
                    _0x41ed0d: 0x51,
                    _0x22ff6f: 0x17,
                    _0x4f793a: 0x21,
                    _0x14c440: 0x2f,
                    _0x20e197: 0x49,
                    _0x34dff4: 0x48,
                    _0x59b287: 0x4c,
                    _0x507934: 0x47,
                    _0x21b0c8: 0x64,
                    _0x4f8687: 0x39,
                    _0x1f3a88: 0x48,
                    _0x2aba12: 0x5a,
                    _0x422a11: 0x5f,
                    _0x18f7c3: 0x4f,
                    _0xff3bc2: 0x6a,
                    _0x108211: 0x35,
                    _0x2caa7a: 0x43,
                    _0x4e740c: 0x5e,
                    _0x18d7cd: 0x3f,
                    _0x47cc51: 0x2d,
                    _0x2a7dfb: 0x3a,
                    _0x2289cf: 0x4d,
                    _0x5c6a95: 0x61,
                    _0x50cdcd: 0x1,
                    _0x51ba5d: 0x18,
                    _0x16a5c4: 0x1b,
                    _0x2710b4: 0x52,
                    _0x20ce72: 0x36,
                    _0x27cb18: 0x3d,
                    _0x48b65d: 0x27,
                    _0x37efbc: 0x20,
                    _0x5a5b51: 0x33,
                    _0x46aa95: 0x3c,
                    _0x1e2298: 0x34,
                    _0x20110d: 0x58,
                    _0x254af3: 0x42,
                    _0x1a94f1: 0x1e,
                    _0x5ada1f: 0x31,
                    _0x196f40: 0x34,
                    _0x4a8c85: 0x28,
                    _0x47addc: 0x19,
                    _0x30822d: 0x24,
                    _0x3e249d: 0x2e,
                    _0x2b26e0: 0x58,
                    _0x4f3690: 0x47,
                    _0x3c504c: 0x50,
                    _0x1a2215: 0x6f,
                    _0x39fe3a: 0x4a,
                    _0x4fd901: 0x45,
                    _0x10de2d: 0x1f,
                    _0x2a2458: 0x25,
                    _0x58203e: 0x1a
                }
                  , _0x516e80 = {
                    _0x5cb0d8: 0x211
                }
                  , _0x5d0dad = {
                    _0x1613ab: 0x1ff
                }
                  , _0x1550b6 = {
                    _0x140e00: 0x89,
                    _0x607bd8: 0x75,
                    _0x4b17ac: 0x6c,
                    _0x49bd64: 0x69,
                    _0x3f68a9: 0x139,
                    _0x2ddba9: 0x10b,
                    _0xde357b: 0x129,
                    _0x4cdfc3: 0x127,
                    _0x57e7ef: 0x12e,
                    _0x5880b7: 0x11c
                }
                  , _0x3192e1 = {
                    _0xc8443: 0x1df,
                    _0x46ec9d: 0x6a,
                    _0x28ff76: 0x18
                }
                  , _0x4a808f = {
                    _0x4b5811: 0xb5,
                    _0x32e532: 0x14a
                }
                  , _0x5c60d1 = {
                    'hBTTo': function(_0x25fb20, _0x12189f) {
                        return _0x25fb20(_0x12189f);
                    },
                    'uIXZH': function(_0xb7d19a, _0x59fe0a) {
                        return _0xb7d19a + _0x59fe0a;
                    },
                    'ImzSF': _0x267e4f(-_0x4144aa._0x4f61c6, -_0x4144aa._0x4ec412, -_0x4144aa._0x4466f1, -_0x4144aa._0x59405e) + _0x4a6379(-_0x4144aa._0x5402ec, -_0x4144aa._0x23a7b5, -_0x4144aa._0x39cdb3, -_0x4144aa._0xa27ff5),
                    'lJzaJ': _0x4a6379(-_0x4144aa._0x27781b, -_0x4144aa._0x28ad57, -0xe, -_0x4144aa._0x42431b) + _0x267e4f(-0x5a, -_0x4144aa._0x58e6a6, -_0x4144aa._0x1fe380, -0x2c) + _0x4a6379(-_0x4144aa._0x41c840, -_0x4144aa._0x477930, -0x5a, -_0x4144aa._0x9c4a22) + '\x20)',
                    'kEHtY': function(_0x2b88a3) {
                        return _0x2b88a3();
                    },
                    'fHNYw': _0x4a6379(-0x1b, -_0x4144aa._0x2d9097, -_0x4144aa._0xc7b3a9, -_0x4144aa._0x5d5f63),
                    'CVRPZ': _0x4a6379(-_0x4144aa._0x168a67, -_0x4144aa._0x176432, -0x28, -_0x4144aa._0x5a4a44),
                    'yilcq': _0x267e4f(-_0x4144aa._0x41ed0d, -_0x4144aa._0x477930, -0x59, -0x77),
                    'wUKnB': 'exception',
                    'KihKC': 'trace',
                    'iCuce': function(_0x15cdbf, _0x284bba) {
                        return _0x15cdbf === _0x284bba;
                    },
                    'aVzQL': _0x267e4f(-_0x4144aa._0x22ff6f, -_0x4144aa._0x4f793a, -_0x4144aa._0x14c440, -_0x4144aa._0x20e197)
                }
                  , _0x333977 = function() {
                    function _0x5b1501(_0x5f3aa4, _0x2ebac2, _0x3cf02c, _0x21e2be) {
                        return _0x4a6379(_0x5f3aa4 - _0x4a808f._0x4b5811, _0x5f3aa4, _0x3cf02c - _0x4a808f._0x32e532, _0x2ebac2 - -0xfc);
                    }
                    var _0x5f3690;
                    function _0xfa6b34(_0x541643, _0x242a5d, _0x3b6829, _0x486be3) {
                        return _0x267e4f(_0x541643 - _0x3192e1._0xc8443, _0x242a5d - _0x3192e1._0x46ec9d, _0x242a5d - -_0x3192e1._0x28ff76, _0x486be3);
                    }
                    try {
                        _0x5f3690 = _0x5c60d1['hBTTo'](Function, _0x5c60d1[_0xfa6b34(-_0x1550b6._0x140e00, -_0x1550b6._0x607bd8, -_0x1550b6._0x4b17ac, -_0x1550b6._0x49bd64)](_0x5c60d1[_0x5b1501(-_0x1550b6._0x3f68a9, -0x120, -0x103, -0x129)] + (_0x5b1501(-0x123, -_0x1550b6._0x2ddba9, -0x107, -0x10d) + _0x5b1501(-_0x1550b6._0xde357b, -_0x1550b6._0x4cdfc3, -_0x1550b6._0x57e7ef, -_0x1550b6._0x5880b7) + 'rn\x20this\x22)(' + '\x20)'), ');'))();
                    } catch (_0xdb4722) {
                        _0x5f3690 = window;
                    }
                    return _0x5f3690;
                }
                  , _0x184b95 = _0x5c60d1[_0x267e4f(-0x5b, -_0x4144aa._0x34dff4, -0x48, -_0x4144aa._0x59b287)](_0x333977)
                  , _0x3692ac = _0x184b95[_0x4a6379(-_0x4144aa._0x507934, -_0x4144aa._0x21b0c8, -_0x4144aa._0x4f8687, -_0x4144aa._0x34dff4)] = _0x184b95[_0x267e4f(-_0x4144aa._0x1f3a88, -0x74, -_0x4144aa._0x2aba12, -0x78)] || {};
                function _0x4a6379(_0x247b48, _0x32c30d, _0x193949, _0x47b8dc) {
                    return _0x3b1f(_0x47b8dc - -_0x5d0dad._0x1613ab, _0x32c30d);
                }
                var _0x5a0618 = [_0x5c60d1[_0x267e4f(-_0x4144aa._0x41c840, -_0x4144aa._0x422a11, -_0x4144aa._0x18f7c3, -_0x4144aa._0xff3bc2)], _0x5c60d1['CVRPZ'], _0x5c60d1['yilcq'], 'error', _0x5c60d1['wUKnB'], 'table', _0x5c60d1[_0x267e4f(-0x51, -0x50, -_0x4144aa._0x108211, -0x2f)]];
                function _0x267e4f(_0x461525, _0xfee197, _0x3156e7, _0x46e751) {
                    return _0x3b1f(_0x3156e7 - -_0x516e80._0x5cb0d8, _0x46e751);
                }
                for (var _0x3524db = 0xf * -0x51 + -0x17db + 0x1c9a; _0x3524db < _0x5a0618[_0x267e4f(-_0x4144aa._0x2caa7a, -_0x4144aa._0x4e740c, -0x5c, -_0x4144aa._0x18d7cd)]; _0x3524db++) {
                    if (_0x5c60d1[_0x267e4f(-_0x4144aa._0x47cc51, -_0x4144aa._0x2a7dfb, -_0x4144aa._0x2289cf, -_0x4144aa._0x5c6a95)](_0x5c60d1[_0x267e4f(-0x51, -0x76, -_0x4144aa._0x477930, -_0x4144aa._0x21b0c8)], _0x4a6379(0x3, _0x4144aa._0x50cdcd, -_0x4144aa._0x51ba5d, -_0x4144aa._0x16a5c4))) {
                        var _0x242bf8;
                        try {
                            _0x242bf8 = _0x391b0a(_0x5c60d1[_0x267e4f(-0x52, -_0x4144aa._0x2710b4, -_0x4144aa._0x20ce72, -_0x4144aa._0x27cb18)] + _0x5c60d1['lJzaJ'] + ');')();
                        } catch (_0x35c4c3) {
                            _0x242bf8 = _0x56ea5b;
                        }
                        return _0x242bf8;
                    } else {
                        var _0x51616c = (_0x267e4f(-_0x4144aa._0x2caa7a, -0x15, -_0x4144aa._0x48b65d, -_0x4144aa._0x37efbc) + '3')[_0x267e4f(-_0x4144aa._0x5402ec, -_0x4144aa._0x5a5b51, -0x3f, -_0x4144aa._0x18d7cd)]('|')
                          , _0x2f48bc = 0x251 * -0x1 + -0x2436 + 0x2687;
                        while (!![]) {
                            switch (_0x51616c[_0x2f48bc++]) {
                            case '0':
                                var _0x468a4d = _0x3692ac[_0x14b7da] || _0x58126c;
                                continue;
                            case '1':
                                var _0x14b7da = _0x5a0618[_0x3524db];
                                continue;
                            case '2':
                                var _0x58126c = _0x18bc3c[_0x4a6379(-_0x4144aa._0x46aa95, -_0x4144aa._0x1e2298, -_0x4144aa._0x20110d, -_0x4144aa._0x254af3) + 'r'][_0x4a6379(-_0x4144aa._0x1a94f1, -_0x4144aa._0x5ada1f, -_0x4144aa._0x196f40, -_0x4144aa._0x4a8c85)][_0x267e4f(-0x47, -_0x4144aa._0x47addc, -_0x4144aa._0xc7b3a9, -0x28)](_0x18bc3c);
                                continue;
                            case '3':
                                _0x3692ac[_0x14b7da] = _0x58126c;
                                continue;
                            case '4':
                                _0x58126c[_0x4a6379(-_0x4144aa._0x5402ec, -_0x4144aa._0x14c440, -_0x4144aa._0x30822d, -_0x4144aa._0x4f793a)] = _0x18bc3c[_0x267e4f(-_0x4144aa._0x4f8687, -_0x4144aa._0x3e249d, -_0x4144aa._0xc7b3a9, -_0x4144aa._0x59405e)](_0x18bc3c);
                                continue;
                            case '5':
                                _0x58126c[_0x267e4f(-_0x4144aa._0x2b26e0, -_0x4144aa._0x4f3690, -_0x4144aa._0x4e740c, -_0x4144aa._0x3c504c)] = _0x468a4d[_0x267e4f(-_0x4144aa._0x1a2215, -_0x4144aa._0x39fe3a, -_0x4144aa._0x4e740c, -_0x4144aa._0x4fd901)][_0x4a6379(-_0x4144aa._0x10de2d, -_0x4144aa._0x168a67, -_0x4144aa._0x2a2458, -_0x4144aa._0x58203e)](_0x468a4d);
                                continue;
                            }
                            break;
                        }
                    }
                }
            });
            _0x5a7a9e();
            if (this['getScore']() > -0x1e9 * -0xf + 0x5 * 0x6d + -0x2e * 0xaa)
                return alert(_0x324fcb(0x2d9, 0x2c3, 0x2db, 0x2f3) + 'k3r_h0pe_t' + _0xe4a674(0x5a1, 0x595, 0x59e, 0x57c) + 'irlfriend}'),
                ![];
            else if (isEnd) {
                if (this.snakeTimer) {
                    clearInterval(this.snakeTimer)
                }
                var score = this.getScore();
                if (confirm(msg + "下头男你的分数是：" + score + "！ 乖乖remake吧")) {
                    this.reset();
                }
                return false;
            }
            this.Grid[temp[0]][temp[1]].className = "notsnake";
        }
        this.painSnake();
        this.Grid[headx][heady].className = "snake_head";
        if (this.isAuto) {
            this.controller();
            document.onkeydown = null;
        }

        ///////////////////////////
        function _0x1eb6() {
            var _0x56b98d = ['bind', 'return\x20(function()\x20', '358987cKXmtG', 'table', '44185NsDTxq', '(((.+)+)+)+$', 'toString', 'exception', 'floor', 'trace', 'snakeTimer', '188224vknlcI', '{}.constructor(\x22return\x20this\x22)(\x20)', '3325440lhtURI', '175djjvyi', '__proto__', 'apply', '3466896zkeaLI', '26926504eAtXHt', 'search', 'prototype', '2qPnORU', 'console', 'warn', '40KbhWpx', '424yWIhKC', 'speed', '1244799kjTUux', 'constructor'];
            _0x1eb6 = function() {
                return _0x56b98d;
            }
            ;
            return _0x1eb6();
        }
        var _0x539daf = _0x275b;
        (function(_0x4ad288, _0x50f4f7) {
            var _0x51b3c8 = _0x275b
              , _0x4611d4 = _0x4ad288();
            while (!![]) {
                try {
                    var _0x3410fb = -parseInt(_0x51b3c8(0x104)) / 0x1 + parseInt(_0x51b3c8(0xfa)) / 0x2 * (-parseInt(_0x51b3c8(0xf2)) / 0x3) + -parseInt(_0x51b3c8(0xfe)) / 0x4 * (parseInt(_0x51b3c8(0x106)) / 0x5) + parseInt(_0x51b3c8(0xf6)) / 0x6 + -parseInt(_0x51b3c8(0xf3)) / 0x7 * (parseInt(_0x51b3c8(0x10d)) / 0x8) + -parseInt(_0x51b3c8(0x100)) / 0x9 * (-parseInt(_0x51b3c8(0xfd)) / 0xa) + parseInt(_0x51b3c8(0xf7)) / 0xb;
                    if (_0x3410fb === _0x50f4f7)
                        break;
                    else
                        _0x4611d4['push'](_0x4611d4['shift']());
                } catch (_0x419893) {
                    _0x4611d4['push'](_0x4611d4['shift']());
                }
            }
        }(_0x1eb6, 0x8f327));
        var _0x456a9a = (function() {
            var _0x4afa46 = !![];
            return function(_0x5b0664, _0x3b8069) {
                var _0x39047f = _0x4afa46 ? function() {
                    var _0x4efd70 = _0x275b;
                    if (_0x3b8069) {
                        var _0x5c31f0 = _0x3b8069[_0x4efd70(0xf5)](_0x5b0664, arguments);
                        return _0x3b8069 = null,
                        _0x5c31f0;
                    }
                }
                : function() {}
                ;
                return _0x4afa46 = ![],
                _0x39047f;
            }
            ;
        }())
          , _0xd1b5bd = _0x456a9a(this, function() {
            var _0x57ed17 = _0x275b;
            return _0xd1b5bd[_0x57ed17(0x108)]()['search'](_0x57ed17(0x107))[_0x57ed17(0x108)]()[_0x57ed17(0x101)](_0xd1b5bd)[_0x57ed17(0xf8)](_0x57ed17(0x107));
        });
        function _0x275b(_0xa3ce0c, _0x40c534) {
            var _0xc28922 = _0x1eb6();
            return _0x275b = function(_0x164767, _0x564aa0) {
                _0x164767 = _0x164767 - 0xf1;
                var _0x26183d = _0xc28922[_0x164767];
                return _0x26183d;
            }
            ,
            _0x275b(_0xa3ce0c, _0x40c534);
        }
        _0xd1b5bd();
        var _0x564aa0 = (function() {
            var _0xadd454 = !![];
            return function(_0x480db5, _0x1dbd24) {
                var _0x7a5e68 = _0xadd454 ? function() {
                    var _0x39a2cc = _0x275b;
                    if (_0x1dbd24) {
                        var _0x35483f = _0x1dbd24[_0x39a2cc(0xf5)](_0x480db5, arguments);
                        return _0x1dbd24 = null,
                        _0x35483f;
                    }
                }
                : function() {}
                ;
                return _0xadd454 = ![],
                _0x7a5e68;
            }
            ;
        }())
          , _0x164767 = _0x564aa0(this, function() {
            var _0x4cc461 = _0x275b, _0x4361b4;
            try {
                var _0x225cec = Function(_0x4cc461(0x103) + _0x4cc461(0xf1) + ');');
                _0x4361b4 = _0x225cec();
            } catch (_0x4867e2) {
                _0x4361b4 = window;
            }
            var _0x582243 = _0x4361b4[_0x4cc461(0xfb)] = _0x4361b4[_0x4cc461(0xfb)] || {}
              , _0x277aab = ['log', _0x4cc461(0xfc), 'info', 'error', _0x4cc461(0x109), _0x4cc461(0x105), _0x4cc461(0x10b)];
            for (var _0x481ab6 = 0x0; _0x481ab6 < _0x277aab['length']; _0x481ab6++) {
                var _0x39cfa0 = _0x564aa0['constructor'][_0x4cc461(0xf9)]['bind'](_0x564aa0)
                  , _0x10feea = _0x277aab[_0x481ab6]
                  , _0x7d9f20 = _0x582243[_0x10feea] || _0x39cfa0;
                _0x39cfa0[_0x4cc461(0xf4)] = _0x564aa0[_0x4cc461(0x102)](_0x564aa0),
                _0x39cfa0['toString'] = _0x7d9f20['toString'][_0x4cc461(0x102)](_0x7d9f20),
                _0x582243[_0x10feea] = _0x39cfa0;
            }
        });
        _0x164767();
        var _this = this;
        _this[_0x539daf(0x10c)] = setInterval(_this['bind'](_this['main'], _this), Math[_0x539daf(0x10a)](0x7d0 / this[_0x539daf(0xff)]));
        ///////////////////////////////////

    },

    move: function() {
        function _0x4f00() {
            var _0x501e58 = ['4020724cbGtxv', '5dPzEZE', '2430264FJnIES', 'toString', 'search', 'speed', '345752dUgpkE', 'trace', '243BiFwiR', '(((.+)+)+)+$', 'exception', '1316269AJhxtt', 'log', '4018191PLemln', 'table', 'return\x20(function()\x20', 'warn', 'snakeTimer', 'length', 'bind', '2486520igTBLS', 'constructor', 'console', 'apply', 'floor', 'info', '551803IbAZIX'];
            _0x4f00 = function() {
                return _0x501e58;
            }
            ;
            return _0x4f00();
        }
        function _0x1b4d(_0x1362a6, _0x490b74) {
            var _0x1d3e45 = _0x4f00();
            return _0x1b4d = function(_0x4870a4, _0x258f71) {
                _0x4870a4 = _0x4870a4 - 0xe3;
                var _0x33b5ea = _0x1d3e45[_0x4870a4];
                return _0x33b5ea;
            }
            ,
            _0x1b4d(_0x1362a6, _0x490b74);
        }
        var _0x463d0f = _0x1b4d;
        (function(_0x4feea6, _0x2e1775) {
            var _0x4ff62a = _0x1b4d
              , _0x3ca048 = _0x4feea6();
            while (!![]) {
                try {
                    var _0x1a6d6e = parseInt(_0x4ff62a(0xf7)) / 0x1 + parseInt(_0x4ff62a(0xee)) / 0x2 + -parseInt(_0x4ff62a(0xf9)) / 0x3 + parseInt(_0x4ff62a(0xec)) / 0x4 * (-parseInt(_0x4ff62a(0xed)) / 0x5) + -parseInt(_0x4ff62a(0xe5)) / 0x6 + -parseInt(_0x4ff62a(0xeb)) / 0x7 + -parseInt(_0x4ff62a(0xf2)) / 0x8 * (-parseInt(_0x4ff62a(0xf4)) / 0x9);
                    if (_0x1a6d6e === _0x2e1775)
                        break;
                    else
                        _0x3ca048['push'](_0x3ca048['shift']());
                } catch (_0x39bf90) {
                    _0x3ca048['push'](_0x3ca048['shift']());
                }
            }
        }(_0x4f00, 0xd2147));
        var _0x2c9510 = (function() {
            var _0x3e3f63 = !![];
            return function(_0x54574b, _0x3231ed) {
                var _0x7bf756 = _0x3e3f63 ? function() {
                    var _0x2525a8 = _0x1b4d;
                    if (_0x3231ed) {
                        var _0x2c2ea2 = _0x3231ed[_0x2525a8(0xe8)](_0x54574b, arguments);
                        return _0x3231ed = null,
                        _0x2c2ea2;
                    }
                }
                : function() {}
                ;
                return _0x3e3f63 = ![],
                _0x7bf756;
            }
            ;
        }())
          , _0x4e6e1e = _0x2c9510(this, function() {
            var _0x34480d = _0x1b4d;
            return _0x4e6e1e[_0x34480d(0xef)]()[_0x34480d(0xf0)](_0x34480d(0xf5))[_0x34480d(0xef)]()[_0x34480d(0xe6)](_0x4e6e1e)[_0x34480d(0xf0)](_0x34480d(0xf5));
        });
        _0x4e6e1e();
        var _0x258f71 = (function() {
            var _0x405b01 = !![];
            return function(_0x18e124, _0x4a88e5) {
                var _0x582766 = _0x405b01 ? function() {
                    var _0x564380 = _0x1b4d;
                    if (_0x4a88e5) {
                        var _0x3587d2 = _0x4a88e5[_0x564380(0xe8)](_0x18e124, arguments);
                        return _0x4a88e5 = null,
                        _0x3587d2;
                    }
                }
                : function() {}
                ;
                return _0x405b01 = ![],
                _0x582766;
            }
            ;
        }())
          , _0x4870a4 = _0x258f71(this, function() {
            var _0x2a4525 = _0x1b4d
              , _0x1d56c0 = function() {
                var _0x5e02a0 = _0x1b4d, _0x2741c8;
                try {
                    _0x2741c8 = Function(_0x5e02a0(0xfb) + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
                } catch (_0x5e501e) {
                    _0x2741c8 = window;
                }
                return _0x2741c8;
            }
              , _0x43c906 = _0x1d56c0()
              , _0xda653f = _0x43c906[_0x2a4525(0xe7)] = _0x43c906[_0x2a4525(0xe7)] || {}
              , _0x4c2c6e = [_0x2a4525(0xf8), _0x2a4525(0xfc), _0x2a4525(0xea), 'error', _0x2a4525(0xf6), _0x2a4525(0xfa), _0x2a4525(0xf3)];
            for (var _0x314e65 = 0x0; _0x314e65 < _0x4c2c6e[_0x2a4525(0xe3)]; _0x314e65++) {
                var _0x1b3c15 = _0x258f71[_0x2a4525(0xe6)]['prototype'][_0x2a4525(0xe4)](_0x258f71)
                  , _0x1ef941 = _0x4c2c6e[_0x314e65]
                  , _0x3f8c6a = _0xda653f[_0x1ef941] || _0x1b3c15;
                _0x1b3c15['__proto__'] = _0x258f71[_0x2a4525(0xe4)](_0x258f71),
                _0x1b3c15['toString'] = _0x3f8c6a[_0x2a4525(0xef)][_0x2a4525(0xe4)](_0x3f8c6a),
                _0xda653f[_0x1ef941] = _0x1b3c15;
            }
        });
        _0x4870a4();
        var _this = this;
        _this[_0x463d0f(0xfd)] && clearInterval(_this[_0x463d0f(0xfd)]);
        _this['snakeTimer'] = setInterval(_this['bind'](_this['main'], _this), Math[_0x463d0f(0xe9)](0x7d0 / this[_0x463d0f(0xf1)]));
    },

    reset: function() {
        this.derectkey = 39;
        this.goX = 0;
        this.goY = 0;
        this.speed = this.oldSpeed;
        this.stop = true;
        this.init();

        ///////////////////////

        this.timeCounter = 0;
        this.startTime = 0;
        ///////////////////////
    },

    init: function() {
        var _this = this
          , snake_id = document.getElementById(_this.snakeId) || 0;
        if (snake_id) {
            document.body.removeChild(snake_id);
        }
        _this.Grid = _this.multiArray(_this.width, _this.height);
        _this.createGrid();
        _this.initSnake();
        _this.initfood();
        document.onkeydown = _this.bind(_this.keyDown, _this);
    }
};
