// add all numbers in a mixed array

let a = [1,"m",2,"nos",3,"mon",4,"mos",5];
let sum = 0;
a.forEach((elem)=>{
if(typeof elem==="number") sum+=elem;
});
console.log(sum);