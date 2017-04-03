/**
 * Map Example 1
 */
let cars = [
	{"model":"Honda", "make":"civic", "price":12000},
	{"model":"subaru", "make":"outback", "price":14000},
	{"model":"acura", "make":"tsx", "price":50000},
	{"model":"lexus", "make":"GS", "price":78000},
	{"model":"toyota", "make":"camry", "price":35000},
	{"model":"tesla", "make":"x", "price":50000},
	{"model":"tesla", "make":"s", "price":60000},
]

var taxcredit = .80;

let kinds = cars.map((car) => { return car.price * taxcredit });

console.log(kinds);