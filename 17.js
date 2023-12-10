// last n elements of the array
/*function retrieve(arr,n=1){
    if(n>arr.length){
     return "Itne elements nahi hai";
    }
    for(let i = arr.length-1; i>n;i--){
        console.log(arr[i]);
    }
}
console.log(retrieve([1,2,3,4,5],2));*/

// freverse order
function retrieve(arr, n = 1) {
  if (n > arr.length) {
    console.log("Itne elements nahi hai");
  } else {
    for (let i = 0; i <= n; i++) {
      console.log(arr[arr.length - i]); 
    }
  }
}
retrieve([1, 2, 3, 4, 5, 6], 4);
