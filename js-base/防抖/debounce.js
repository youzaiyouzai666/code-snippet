var count = 1;
var container = document.getElementById('container');

function getUserAction(...arg) {
    console.log(this);
    console.log('arg', arg);
    container.innerHTML = count++;
};

/**
 * 基本方法
 * @param {} fun 
 * @param {*} wait 
 */
function debounce(fun, wait) {
    let timeout;
    return function () {
        console.log('debounce', this);
        clearTimeout(timeout);
        timeout = setTimeout(fun, wait);
    }
}

/**
 * 解决this问题
 * @param {} fun 
 * @param {*} wait 
 */
function debounce2(fun, wait) {
    let timeout;
    return function () {
        const context = this;

        clearTimeout(timeout);
        timeout = setTimeout(function () {
            fun.call(context)
        }, wait);
    }
}

/**
 * 解决 event对象问题
 * @param {} fun 
 * @param {*} wait 
 */
function debounce3(fun, wait) {
    let timeout;
    return function (...args) {
        const context = this;

        clearTimeout(timeout);
        timeout = setTimeout(function () {
            fun.apply(context, args)
        }, wait);
    }
}

/**
 * 立即执行
 * @param {} fun 
 * @param {*} wait 
 */
function debounce4(fun, wait, immediate) {
    let timeout;
    return function (...args) {
        const context = this;

        if (timeout) clearTimeout(timeout);

        if (immediate) {
            const callNow = !timeout;
            if (callNow) {
                fun.apply(context, args);
            }
            timeout = setTimeout(function () {
                timeout = null;
            }, wait)

        } else {
            timeout = setTimeout(function () {
                fun.apply(context, args)
            }, wait);
        }

    }
}
// container.onmousemove = getUserAction;
container.onmousemove = debounce4(getUserAction, 100, true);