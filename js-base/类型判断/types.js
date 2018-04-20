/**
 * 基本版本
 * 核心是 
 *      引用类型 使用toString 方法
 *      基本类型 用typeof
 * @param {*} obj 
 */
function type(obj) {
    const class2type = {};

    // 生成class2type映射
    "Boolean Number String Function Array Date RegExp Object Error Null Undefined".split(" ").forEach(function (item, index) {
        class2type["[object " + item + "]"] = item.toLowerCase();
    })
    return typeof obj === "object" || typeof obj === "function" ?
        class2type[Object.prototype.toString.call(obj)] || "object" :
        typeof obj;
}

/**
 * 第二版
 * 处理ie6 中null 和 undefined 会被 Object.prototype.toString 识别成 [object Object]！
 * @param {*} obj 
 */
function type2(obj) {
    const class2type = {};

     // 一箭双雕   ie6 中null 和 undefined 会被 Object.prototype.toString 识别成 [object Object]！
     if (obj == null) {
        return obj + "";
    }
    // 生成class2type映射
    "Boolean Number String Function Array Date RegExp Object Error Null Undefined".split(" ").forEach(function (item, index) {
        class2type["[object " + item + "]"] = item.toLowerCase();
    })
    return typeof obj === "object" || typeof obj === "function" ?
        class2type[Object.prototype.toString.call(obj)] || "object" :
        typeof obj;
}

/**
 * 判断对象是否为空
 * @param {*} obj 
 */
function isEmptyObject( obj ) {

    let name;

    for ( name in obj ) {
        return false;
    }

    return true;
}

/**
 * window 指向自身
 * @param {} obj 
 */
function isWindow(obj){
    return obj != null && obj === obj.window;
}

/**************************************test**************************************************** */
; (function test() {
    const number = 1;          // [object Number]
    const string = '123';      // [object String]
    const boolean = true;      // [object Boolean]
    const und = undefined;     // [object Undefined]
    const nul = null;          // [object Null]
    const obj = { a: 1 }         // [object Object]
    const array = [1, 2, 3];   // [object Array]
    const date = new Date();   // [object Date]
    const error = new Error(); // [object Error]
    const reg = /a/g;          // [object RegExp]
    const func = function a() { }; // [object Function]  const

    function checkType(...args) {
        for (var i = 0; i < args.length; i++) {
            console.log(args[i], '===>', type2(args[i]));
        }
    }
    checkType(number, string, boolean, und, nul, obj, array, date, error, reg, func)
})()