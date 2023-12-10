// add all numbers in a mixed array

function addNum(arr){
    sum = 0;
    arr.forEach(element => {
        if(typeof element === 'number' ) sum+=element;
    });
    return sum; 
}
console.log(addNum([1,"monis",2,"tabish",3,"danish"])); 