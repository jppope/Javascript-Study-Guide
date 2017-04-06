/**
 * Multi dimensional generator
 */

var vectors = [];

var startEnd = {
	oneVert:300,
	twoVert:800,
	oneHoriz:300,
	twoHoriz:800
}
// init
combineVectors(startEnd);

// gerate arr
function horizontalVector(start, end){
	let arr = [];
	while(start < end){
		let obj = {}
		obj.firstDim = start;
		obj.secondDim = 0;
		arr.push(obj);
		start++
	}
	console.log(arr);
	return arr;
}

function combineVectors(obj){

	while(obj.oneVert < obj.twoVert){
		//generate array of second dimensions
		var arr = horizontalVector(obj.oneHoriz,obj.twoHoriz);

		var combine = arr.map(function(item){
			item.secondDim = obj.oneVert;
			console.log(item);
			return item;
		});
		combine.forEach(function(thing){vectors.push(thing)});

		obj.oneVert +=1;
	}
}

