/**
 * base版本
 * @param {Array} array 
 */
function unique(array){
    function _haveData(val,res){
        for(const _val of res){
            if(val === _val){
                return true;
            }
        }
        return false;
    }
    if(!Array.isArray(array)){
        return array;
    }
    let _res = [];
    for(const val of array){
        if(_res.length<1){
            _res.push(val) ;
            continue;
        }
        if(!_haveData(val,_res)){
            _res.push(val) ;
        }
        
    }
    return _res;
}

/**
 * 使用 Array.prototype.indexOf方法来 判断
 * @param {Array} array 
 */
function unique_indexOf(array){
    function _haveData(val,res){
        if(res.indexOf(val) === -1){
            return false;
        }
        return true;
    }
    if(!Array.isArray(array)){
        return array;
    }
    let _res = [];
    for(const val of array){
        if(_res.length<1){
            _res.push(val) ;
            continue;
        }
        if(!_haveData(val,_res)){
            _res.push(val) ;
        }
        
    }
    return _res;
}





/**************************************test**************************************************** */
function test(){
   const array = [0,1,1,3,4,1,9];
   console.log(array, unique_indexOf(array));
}
test();