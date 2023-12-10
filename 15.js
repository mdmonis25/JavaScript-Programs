// Return type of element in the array
function elemType(elem){
    return typeof elem;
}
console.log(elemType(""));
console.log(elemType(2));
console.log(elemType(true));
console.log(elemType([]));
console.log(elemType(function(){}));