/**
 *
 */
let categories = [
	{id:'animals', 'parent': null},
	{id:'mammals', 'parent': 'animals'},
	{id:'cats', 'parent': 'mammals'},
	{id:'dogs', 'parent': 'mammals'},
	{id:'labrador', 'parent': 'dog'},
	{id:'asshole', 'parent': 'cats'},
	{id:'siamese', 'parent': 'cats'},
]

let makeTree = (categories, parent) => {
	let node = {}
	categories
		.filter(c => c.parent === parent)
		.forEach(c => node[c.id] = makeTree(categories, c.id))
	return node
}

console.log(
	JSON.stringify(makeTree(categories, null), null, 2)
)
