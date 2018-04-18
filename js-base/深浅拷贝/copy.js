/**
 * 浅拷贝
 * @param {*} obj 
 */
function shallowCopy(obj){
    if(typeof obj !== 'object') return;

    const newObj = obj instanceof Array ? [] :{};
    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

/****************************test************************************/
;(function test(){
    const arr = [1,2, {old: 'old'}, ['old']];
    const arr_new = shallowCopy(arr);

    console.log('arr_new',arr_new);
    arr_new[2].old = 'new';
    console.log('arr_new',arr_new);
    console.log('arr',arr);

})();