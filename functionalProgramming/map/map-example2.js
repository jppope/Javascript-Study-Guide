/**
 * this file is just to follow along
 */

var nouns = [
	"afterthought",
	"downtown",
	"observation",
	"beginner",
	"snail",
	"coal",
	"car",
	"wind",
	"airport",
	"insurance",
	"morning",
	"arithmetic"
]

function countIt(word){
	return word.split("").length;
}

var wordsize = nouns.map(countIt)

var totalLetters = 0;

// example without reduce (checkout "reduce" to see this done cleaner)
wordsize.forEach(function(word){
	totalLetters += word;
});

// get the average word length
var averageWord = totalLetters / nouns.length;

// log the average word size
console.log(Math.round(averageWord));