//Reversing Number
//Without Converting it to String

// let num = 1234;
// let rev=0;
// while(num!==0){
//     rev = rev*10 + num%10; 
//     num = Math.floor(num/10);
// }
// console.log(rev);

//With Converting it to a String

let num = 654321;
let rev = Number(num.toString().split("").reverse().join(""));
console.log(typeof(rev));