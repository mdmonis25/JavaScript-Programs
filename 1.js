// Reverse Each word in the given String
/*let s = 'Monis Bhai Kaise Ho'
let p =""
s.split(" ").forEach(function(e){
   p += (e.split("").reverse().join("")+" ");
});
console.log(p)*/

let s = "Divya appi kaisi ho"
//map function values ko array me store karte jaata hai
let p = s.split(" ").map(function(e){
   return e.split("").reverse().join("");
})
console.log(p.join(" "))