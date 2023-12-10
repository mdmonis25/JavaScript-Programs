// Capitalize first letter of each word in string
cap = (str) =>{
    var arrs = str.split(" ").map(function(word){
        return word.charAt(0).toUpperCase() + word.substring(1);
    })
    return arrs.join(" ");
}

console.log(cap("people think what people think"));