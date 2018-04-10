
//参考：https://github.com/mqyqingfeng/Blog/issues/27
/**
 * base
 * @param {Array} array 
 */
function unique(array){
    let res = [];
    if(!Array.isArray(array)) return;

    for(let val of array){
        if(res.length === 0 || !_isRepeat(val, res)){
            res.push(val);
            continue;
        };
    }
    return res;

    function _isRepeat(val, res){
        for(let v of res){
            if(v === val){
                return true;
            }
        }
        return false;
    }
    
}


function unique_indexOf(array){
    let res = [];
    if(!Array.isArray(array)) return;

    for(let val of array){
        if(res.length === 0 || !_isRepeat(val, res)){
            res.push(val);
            continue;
        };
    }
    return res;

    function _isRepeat(val, res){
        if(res.indexOf(val) === -1){
            return false;
        }
        return true;
    }
    
}

/**
 * 使用 filter 与 indexof
 * @param {Array} arrays 
 */
function unique_filer(arrays){
    return arrays.filter(function(item, index, array){
        return array.indexOf(item) === index
    })
}

/**
 * 使用object.hasOwnProperty 来判断
 * @param {Array} arrays 
 */
function unique_ObjectKey(arrays){
    const obj = {};
    /**
     * 处理obj 的key值
     * @param {*} item 
     */
    function _setKey(item){
       return typeof item + item; 
    }
    return arrays.filter(function(item,index, array){
        const _key = _setKey(item);
        return obj.hasOwnProperty(_key) ? false : (obj[_key]= true) //TODO 为什么 “(obj[item]= true) ”返回true
    })
}


function unique_es6(array){
    return Array.from(new Set(array));
}

/**************************************test**************************************************** */
function test(){
    const array = [0,1,1,3,4,1,9,'1'];
    console.log(array, unique_es6(array));
 }
 test();