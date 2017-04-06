/**
 * Reduce
 */

var companies = [
	{"name":"tesla", "product":"cars", "price":100},
	{"name":"ford", "product":"cars", "price":100},
	{"name":"apple", "product":"computers", "price":10},
	{"name":"google", "product":"ads", "price":50},
	{"name":"GM", "product":"cars", "price":70},
	{"name":"facebook", "product":"cat videos", "price":30}
];

// add prices together
var totalAmount = companies.reduce(function(sum, order){
	console.log(sum);
	return sum + order.price;
}, 0)
