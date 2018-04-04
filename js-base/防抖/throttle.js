var count = 1;
var container = document.getElementById('container');

/**
 * 
 * @param {*} arg 
 */
function getUserAction(...arg) {
    // console.log(this);
    // console.log('arg', arg);
    // console.log('getUserAction', + new Date());
    container.innerHTML = count++;
};

/**
 * base版本 ——刚进入执行，且两次执行时间差wait
 * @param {*} fn  回调函数
 * @param {*} wait  最少两次执行时间
 */
const throttle = (fn, wait) => {
    let timeout,
        previous = 0;

    return function (...args) {
        const context = this;
        const now = + new Date();
        if((now - previous)>wait){
            fn.apply(context, args);
            previous = now;
        }
    }
}

/**
 * 版本2 ——刚进入执行，且两次执行时间差wait,也就是说 至少执行两次
 * @param {*} fn  回调函数
 * @param {*} wait  最少两次执行时间
 * @param {[number]} delay 延迟执行时间
 */
const throttle2 = (fn, wait,delay) => {
    let timeout,
        previous = 0;

    return function (...args) {
        const context = this;
        const now = + new Date();
        clearTimeout(timeout);
        if((now - previous)>=wait){
            fn.apply(context, args);
            previous = now;
        }else{
            timeout = setTimeout(fn.bind(context,...args), delay);
        }
    }
}
// container.onmousemove = getUserAction;
container.onmousemove = throttle2(getUserAction,1000,100,);