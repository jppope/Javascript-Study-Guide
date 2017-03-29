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

function findDogs(animal){
	return animal.species == 'dog';
}

var animalsGoingToHeaven = animals.filter(findDogs);

console.log(animalsGoingToHeaven);