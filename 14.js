// clone an Array
/*function cloneArray(arr){
    return [...arr];
}
console.log(cloneArray([1,2,3,4]));*/

function cloneArray(arr){
  /*  var newArr = [];
    arr.forEach(element => {
        newArr.push(element);
    });
    return newArr; */
  var newArr =  arr.map(function(e){
        return e;
    })
    return newArr;
}

console.log(cloneArray([1,2,3,4]));