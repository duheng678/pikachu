import showString from './css';

const pikachu = {
    timer: null,
    timeout: 10,
    n: 0,
    el: {
        show: document.querySelector('.show'),
        styleShow: document.querySelector('._show'),
    },
    //事件整理
    events: {
        pause: '#btnPause',
        play: '#btnPlay',
        slow: '#btnSlow',
        normal: '#btnNormal',
        fast: '#btnFast',
    },
    //事件绑定
    bindEvents: () => {
        Object.entries(pikachu.events).forEach(item => {
            document.querySelector(item[1]).onclick = pikachu[item[0]];
        });
    },
    init: () => {
        pikachu.el.show.innerText = showString.substr(0, pikachu.n);
        pikachu.el.styleShow.innerHTML = showString.substr(0, pikachu.n);
        pikachu.bindEvents();
        pikachu.play();
    },
    run: () => {
        // 展示的内容+1
        pikachu.n++;
        //展示完停止setInterval
        if (pikachu.n > showString.length) {
            clearInterval(pikachu.timer);
            return;
        }
        //展示在页面上的文本
        pikachu.el.show.innerText = showString.substr(0, pikachu.n);
        //创建style元素的属性
        pikachu.el.styleShow.innerHTML = showString.substr(0, pikachu.n);
        //动态展示页面
        pikachu.el.show.scrollTop = pikachu.el.show.scrollHeight;
    },
    //播放
    play: () => {
        // clearInterval();
        clearInterval(pikachu.timer);
        pikachu.timer = setInterval(pikachu.run, pikachu.timeout);
    },
    pause: () => {
        clearInterval(pikachu.timer);
    },
    slow: () => {
        clearInterval(pikachu.timer);
        pikachu.timeout = 100;
        pikachu.timer = setInterval(pikachu.run, pikachu.timeout);
    },
    normal: () => {
        clearInterval(pikachu.timer);
        pikachu.timeout = 10;
        pikachu.timer = setInterval(pikachu.run, pikachu.timeout);
    },
    fast: () => {
        clearInterval(pikachu.timer);
        pikachu.timeout = 1;
        pikachu.timer = setInterval(pikachu.run, pikachu.timeout);
    },
};
pikachu.init();
