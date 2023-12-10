// 12 - 21
/*function revNum(num){
    return Number(num.toString().split("").reverse().join(""));
}
console.log(revNum(2111));*/

function reverseNum(num){
    var rev = 0;
    while(num>0){ //121
        rev = rev*10 + num%10;
        console.log("rev ",rev);
        num = Math.floor(num/10);
        console.log("num ",num)
    }
    return rev;
}
console.log(reverseNum(123));