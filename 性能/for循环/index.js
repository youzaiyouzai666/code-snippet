;(function(){
    var arr = [];
    for(var i=0; i<10000; i++){
        arr.push = Math.random()*100;
    }

    function base(){
        var length = arr.length;
        var printInt =0;
        for(var i=0; i< length; i++){
            printInt++;
        }
    }

    function dao(){
        var length = arr.length;
        var printInt =0;
        for(i<length; i--;){
            printInt++;
        }
    }

    /******************************test*********************************************************** */
    function test(){
        console.time('dao');
        dao();
        console.timeEnd('dao');

        
        console.time('base');
        base();
        console.timeEnd('base');
        
    }
    test()
})();