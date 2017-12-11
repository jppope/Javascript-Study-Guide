/**
* Given an array
* Return a Rearrangement of the contents of an array in a random manner
*/

let arr = ['Bird', 'Cat', 'Dog', 'Geese', 'pigs'];
(function(arr){
  let finished = []
  let i = arr.length;
  while(arr.length > 0){
    let random = Math.floor(Math.random() * arr.length)
    finished.push(arr[random]);
    arr.splice(random, 1);
  }
  console.log(finished);
})(arr);
