// list of items
var haystack = [
	"hay",
	"straw",
	"hay",
	"straw",
	"needle",
	"hay",
	"straw"
]

// function to find them
function findNeedle(item){
	return item == 'needle';
}

// how to break a camel's back
function isStraw(item){
	return item == 'straw';
}

// find it
var needleInHaystack = haystack.filter(findNeedle);

// number of needles
console.log(needleInHaystack.length);

// item to break a camel
var theItemThatBrokeTheCamel = haystack.filter(isStraw);

//
if(theItemThatBrokeTheCamel.length > 2){
	console.log("That was the straw that broke the camels back");
}