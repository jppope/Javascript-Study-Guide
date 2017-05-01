
var str = "hello";

// make sure that you are given a string

typeOf str == String ? reverseIt(str) : error.log("nope")


// Example one
function reverseIt(str){
  return str.split("").reverse().join("")
}

// Example two
function reverseTwo(str){
  str = str.split("");
  var revStr = [];
  for(var i = str.length; i >= 0; i--){
    revStr.push(str[i]);
  }
  return revStr.join("");
}

// Example three array manipulation
// TODO... finish
function reverseThree(str){
  let arr = str.split("");
  let finishArr = [];
  while(arr.length >= 0){
    finishArr.push(arr[arr.length - 1]);
    arr.pop();
  }
  return finishArr.join("");
}
