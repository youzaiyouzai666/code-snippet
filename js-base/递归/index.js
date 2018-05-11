
function gui(arr){
    let result = arr[0];
    shu(result, arr);
    return result; 
}
function shu(result, arr){
    arr.forEach(el => {
        if(el.parentId === result.id){
            result.children = result.children || [];
            result.children.push(el);
            shu(el,arr);
        }
    });
}
 /******************************************test********************************************* */
 let arr = [
    { id: 0, },
    { id: 1, parentId: 0, },
    { id: 2, parentId: 0, },
    { id: 3, parentId: 1, },
    { id: 4, parentId: 1, },
];


console.log(gui(arr));