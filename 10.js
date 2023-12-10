//Checking occurences of letters in a sentence
occurences = (str) =>{
    var ocr = {};
    str.split("").forEach(element => {
        // hasOwnProperty checks weather it has that property or not
        if(ocr.hasOwnProperty(element) === false) ocr[element] = 1;
        else ocr[element]++;
    });
    return ocr;
}
console.log(occurences("apple"))