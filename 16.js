// first n elements of the array
function retrieve(arr,n=1){
    if(n>arr.length){
     return "Itne elements nahi hai";
    }
    var newArr = arr.filter(function(e) {
        if (arr.indexOf(e)<n) return e;
    } )
    return newArr;
}
console.log(retrieve([1,2,3,4,5,6],6));