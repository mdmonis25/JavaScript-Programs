// remove all non male members from an array of objects
var arr = [
    {name:'Monis', gender:'male'},
    {name:'Pompom', gender:'female'},
    {name:'Monisi', gender:'female'},
    {name:'Monisa', gender:'female'},
    {name:'Kunal', gender:'unspecified'}
]
// filter kuchh elements ko return karwane ke liye
/*var newArr = arr.filter(function(e){
    return e.gender ==='male';
})
console.log(newArr);*/

let count = 0;
arr.forEach(function(elem){
    if(elem.gender !== 'male') count++;
})
for(let j=1; j<=count;j++){
for(let i=0; i<arr.length;i++){
    if(arr[i].gender !== 'male'){
        arr.splice(i,1);
    }
}
}
console.log(arr);