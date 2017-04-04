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

var totalAmount = companies.reduce(function(sum, order){
	return sum + order.price;
}, 0)
console.log(totalAmount);