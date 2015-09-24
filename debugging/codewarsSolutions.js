// just playing figured I'd upload it



function findOriginal(afterDiscount, discPercentage){
	var originalPrice="";	
	var inversePercent = 100 - discPercentage;
	var originalPrice = afterDiscount / inversePercent;	
	originalPrice *= 100;
	console.log(originalPrice);
	return originalPrice;
}
findOriginal(150, 25);





function myParseInt(str) {
  var onlyInt = parseInt(str);
  var stringInt = str;
  if(onlyInt == stringInt){
  return onlyInt;
  }
  else{
  return NaN;
  }
}