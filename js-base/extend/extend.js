
/**
 * 复制
 * @param {objects} arg 
 */
function extend(...arg){
    let target = arg[0];
    console.log(target);
    if(typeof  target === 'undefined'){
        target = {}
    }

    for(let i=1,length=arg.length; i<length; i++){
        const obj = arg[i];
        for(key in obj){//hasOwnProperty
            if(obj.hasOwnProperty(key) && obj[key]!== undefined){
                target[key] = typeof obj[key] === 'object' ?extend( target[key], obj[key]) :obj[key];
            }
        }
    }
    return target;
}

/***************************test******************************* */
;(function test(){
    var obj1 = {
        a: 1,
        b: { b1: 1, b2: 2 }
    };
    
    var obj2 = {
        b: { b1: 3, b3: 4 },
        c: {c1:1,c2:2}
    };
    
    var obj3 = {
        c: {c1:0,c3:3},
        d: 4
    };
    console.log(extend(obj1,obj2,obj3));
    
})()