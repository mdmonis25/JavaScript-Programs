function occurences(str) {
  let occ = {};
  str.split("").forEach((e) => {
    if(occ.hasOwnProperty(e)){
        occ[e]++;
    }
    else occ[e] = 1;
  });
  return occ;
}
console.log(occurences("monnnis"));