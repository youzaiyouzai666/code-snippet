/**
 * 浅拷贝
 * @param {*} obj 
 */
function shallowCopy(obj){
    if(typeof obj !== 'object') return;

    const newObj = obj instanceof Array ? [] :{};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

function deepCopy(obj){
    if(typeof obj !== 'object') return;

    const newObj = obj instanceof Array ? [] :{};

    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
        }
    }
    return newObj;
}
/****************************test************************************/
;(function test(){
    const arr = [1,2, {old: 'old'}, ['old']];
    const arr_new = deepCopy(arr);

    console.log('arr_new',arr_new);
    arr_new[2].old = 'new';
    console.log('arr_new',arr_new);
    console.log('arr',arr);

})();