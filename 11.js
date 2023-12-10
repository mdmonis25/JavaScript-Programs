// add all elements of the array

function sum(arr){
    var sum =0;
    arr.forEach(element => {
     sum += element;   
    });
    return sum;
}
console.log(sum([1,2,3,4,5]))
