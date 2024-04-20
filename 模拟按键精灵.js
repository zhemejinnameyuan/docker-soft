let count = 0

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