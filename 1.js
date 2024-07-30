// Reverse Each word in the given String
// forEach
// let s = 'Monis Bhai Kaise Ho'
// let r = ""
// s.split(" ").forEach((word)=>{
//    r += (word.split("").reverse().join("")+ " ");
// })
// console.log(r)

//map Function

let s = 'Monis Bhai Kaise Ho';
let res = s.split(" ").map((elem)=>{
   return elem.split("").reverse().join("");
});

console.log(res.join(" "));