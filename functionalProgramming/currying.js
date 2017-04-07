/**
 * Currying from "Fun fun function"
 */

/**
 * example One
 */
let dragon = (name, size, element) =>
	name =>
		size =>
			element =>
				name + ' is a ' +
				size + ' dragon that breathes ' +
				element + '!'

console.log(dragon('fluffykins')('tiny')('lightning'));

/**
 *  Example two
 */
let dragons = [
	{name:'fluffykins', element:'lightning'},
	{name:'noodie', element:'lightning'},
	{name:'stuff', element:'fire'},
	{name:'thing4', element:'poop'},
	{name:'doomerr', element:'water'},
]

let hasElement =
	(element, obj) => obj.element === element

let lightningDragons =
	dragons.filter(x => hasElement('lightning', x))

console.log(lightningDragons);