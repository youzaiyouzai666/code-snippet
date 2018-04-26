;(function(){
   
    function objectFactory(...args){
        const obj = new Object();
        Constructor = args.shift();

        obj.__proto__ = Constructor.prototype;
        Constructor.apply(obj,args);
        return obj;
    }

    /******************************test*********************************************************** */
    function test(){
       function Man(){
           name:'zhang3'
       }
       Man.prototype.age = 20;FormData

       const person = objectFactory(Man);
       console.log(person.age);
        
    }
    test()
})();