let dragons = [
  {name:'fluffykins', element:'lightning', amount: 10},
  {name:'noodie', element:'lightning', amount: 90},
  {name:'stuff', element:'fire', amount: 10},
  {name:'thing4', element:'poop', amount: 20},
  {name:'doomerr', element:'water', amount: 10},
]

// number sort utility
let compareNumbers = function (a, b) {return a - b;}

// sum
var totalAmount = dragons.reduce(function(sum, dragon){
  return sum + dragon.amount;
},0)

// average
var average = dragons.reduce(function(sum, dragon){
  return sum + dragon.amount;
},0) / dragons.length;

// standard deviation
var standardDev = dragons.reduce(function(sum, dragon){
  return sum + Math.abs(dragon.amount - average);
},0) / dragons.length;


// Median
let median = function(arr){
  let sorted = arr.map(x => x.amount).sort(compareNumbers);
  return arr[Math.round(sorted.length / 2)];
}


console.log("the average amount of dragons is " + average);
console.log("the standard deviation is " + average);
console.log("the median " + median);
