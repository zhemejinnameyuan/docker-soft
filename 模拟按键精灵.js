// ==UserScript==
// @name         星链直播自动点击
// @namespace    http://tampermonkey.net/
// @version      2024-04-20
// @description  try to take over the world!
// @author       You
// @match        https://djdagd.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    'use strict';


    setTimeout(function () {
        let count = 0

        const button = document.createElement('button');
        button.innerHTML = '点击开始执行';

        button.onclick = function () {
            const timer = setInterval(function () {
                handleClick();
            }, 3000);

            function handleClick() {
                let element = document.getElementsByClassName("is-link");
                if (element.length > 0) {
                    element[0].children[0].click()
                    setTimeout(function () {
                        document.getElementsByClassName("el-message-box")[0].getElementsByClassName('el-button--primary')[0].click();
                        count++;
                        console.log(count);
                    }, 1000)
                } else {
                    console.log("无数据")
                    clearInterval(timer)
                }
            }

            if (count > 100) {
                clearInterval(timer)
            }
        }
        document.getElementsByClassName('gva-search-box')[0].prepend(button);
    }, 5000)

    // Your code here...
})();