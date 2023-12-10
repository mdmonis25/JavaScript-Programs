// Palindrome Check

isPalindrome = (str) => {
    var rev = str.split('').reverse().join('');
    if(str === rev) return true;
    else return false;
}
console.log(isPalindrome("kook"))