// Capitalize first letter of each word in string
let a = "capitalize each letter in string.";
let m = a.split(" ").map((word)=>{
    return word.charAt(0).toUpperCase()+word.substring(1);
});
console.log(m.join(" "));