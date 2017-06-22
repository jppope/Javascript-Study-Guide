
// simple example
// I might replace example one with it
const arr = [1,5,7,9,7,5];
var total = arr.reduce((total,value) => total + value);


/**
 * Why not rebuild underscores.js
 */


/**
 * find average using reduce
 */
function average(arr){
  console.log("====== average ======");
  console.log(arr);
  return arr.reduce((total, amount, index, arr) => {
    total += amount;
    if (index === arr.length-1) {
      return total/arr.length
    } else {
      return total
    }
  });
}
console.log(average(arr)+ '\n')

/**
 * reduce to unique values ALSO example of filter
 */
function uniqes(arr) {
  console.log("====== uniques ======");
    console.log(arr);
    return arr.reduce((total, amount, index) => {
      if(total.indexOf(amount) < 0){ total.push(amount); }
      return total;
    }, [])
}
let val = uniqes(arr);
console.log(val)

/**
 * example of map via reduce method
 */
const map = arr.reduce((total, amount, index,arr) =>{
  if(amount > 5) total.push(amount);
  if(index = arr.length-1) return total;
},[]);
//console.log(map);





