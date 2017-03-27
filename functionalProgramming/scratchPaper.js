/**
 * this file is just to follow along
 */

var animals = [
	{"name":"jimmy", "species":"dog", "cost": 15},
	{"name":"janet", "species":"cat", "cost": 1},
	{"name":"jack", "species":"dog", "cost": 15},
	{"name":"jeremy", "species":"cat", "cost": 1},
	{"name":"james", "species":"turtle", "cost": 10},
]


function priceEval(animal){
	return animal.cost <= 10;
}

var expensiveAnimals = animals.filter(priceEval);

console.log(expensiveAnimals);