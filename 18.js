// return most frequent element of array
function frequenctElem(arr){
    var freq = {};
    arr.forEach(element => {
       if(freq.hasOwnProperty(element)) freq[element]++;
       else freq[element] = 1; 
    });
    console.log(freq);
}
frequenctElem([1,2,2,3,4,5])