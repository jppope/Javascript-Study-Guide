/**
 * this file is just to follow along
 */

var animals = [
	{"name":"jimmy", "species":"dog"},
	{"name":"janet", "species":"cat"},
	{"name":"jack", "species":"dog"},
	{"name":"jeremy", "species":"cat"},
	{"name":"james", "species":"turtle"},
]

var dogs = [];

for(var i = 0; i < animals.length; i++){
	if (animals[i].species != "dog"){
		dogs.push(animals[i].name + " the " + animals[i].species);
	}
}

console.log(dogs);