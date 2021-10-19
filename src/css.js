const showString = `
/* 首先，皮卡丘的肤色是黄色 */
.skin {
    background: #ffe600;
    min-height: 60vh;
    position: relative;
}
/* 接下来，画出皮卡丘的眼睛 */
[class^='eye'] {
    position: absolute;
    border: 2px solid #000;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    top: 30px;
    left: 50%;
    margin-left: -32px;
    background: #2e2e2e;
}
[class^='eye']::before {
    content: '';
    position: absolute;
    width: 32px;
    height: 32px;
    border: 3px solid #000;
    border-radius: 50%;
    background-color: white;
    left: 6px;
}
.eye_left {
    transform: translateX(-100px);
}
.eye_right {
    transform: translateX(100px);
}
/* 给皮卡丘装个鼻子 */
.nose {
    position: relative;
    border: 10px solid black;
    border-bottom: none;
    border-color: black transparent transparent;
    width: 0px;
    height: 0px;
    top: 75px;
    left: 50%;
    margin-left: -10px;
}
.nose::before {
    content: '';
    display: block;
    position: absolute;
    width: 20px;
    height: 6px;
    background-color: black;
    border-radius: 10px 10px 0 0;
    top: -15px;
    left: -10px;
}
/* 皮卡丘的鼻子是会动的 */
@keyframes wave {
    0% {
        transform: rotate(0deg);
    }
    33% {
        transform: rotate(5deg);
    }
    66% {
        transform: rotate(-5deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
.nose:hover {
    transform-origin: center bottom;
    animation: wave 300ms infinite linear;
}
/* 然后画皮卡丘的脸 */
[class^='face'] {
    position: absolute;
    left: 50%;
    border: 3px solid black;
    border-radius: 50px;
    width: 88px;
    height: 88px;
    top: 130px;
    margin-left: -44px;
    z-index: 3;
    background-color: red;
}
.face_left {
    transform: translateX(-180px);
}
.face_right {
    transform: translateX(180px);
}
/* 给皮卡丘加上闪电波 */
[class^='face'] img {
    position: absolute;
    top: 50%;
    left: 50%;
}
.face_left img {
    transform: rotateY(180deg);
    transform-origin: 0 0;
}
/* 最后画皮卡丘的嘴 */
.mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -100px;
}
.mouth .up {
    position: relative;
    display: flex;
    top: -20px;
    z-index: 1;
}
[class^='lip'] {
    width: 100px;
    height: 30px;
    border: 3px solid black;
    border-top: transparent;
    background: #ffe600;
}
.mouth .up .lip_left {
    border-radius: 0 0 0 50px;
    border-right: transparent;
    transform: rotate(-15deg);
    transform-origin: right bottom;
}
.mouth .up .lip_right {
    border-radius: 0 0 50px 0;
    border-left: transparent;
    transform-origin: left bottom;
    transform: rotate(15deg);
}
.mouth .down {
    height: 178px;
    position: absolute;
    top: 7px;
    width: 100%;
    overflow: hidden;
}
.mouth .down .yuan1 {
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: #a63a50;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2 {
    width: 200px;
    height: 300px;
    background: #ff485f;
    position: absolute;
    bottom: -155px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
}
/* 好啦！发闪电波的皮卡丘送给您，触摸鼻子还会动哦！！！ */

`;
export default showString;
