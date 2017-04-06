/**
 * Reduce
 *
 * Advanced reduce example courtesy of "fun fun function"
 */

var fs = require('fs');

var output = fs.readFileSync('raw.txt','utf8')
	.trim()
	.split('\n')
	.map(line => line.split('\t'))
	.reduce((customers, line) => {

		customers[line[0]] = customers[line[0]] || [];

		customers[line[0]].push({
			name: line[1],
			price: line[2],
			quantity: line[3]
		})

		return customers;
	}, {})

// log out the result
console.log('output', JSON.stringify(output, null, 2));


// The goal:
// output {
//   "mark johnsan": [
//     {
//       "name": "waffle iron",
//       "price": "80",
//       "quantity": "2"
//     },
//     {
//       "name": "other thing",
//       "price": "80",
//       "quantity": "2"
//     },
//     {
//       "name": "pot",
//       "price": "100",
//       "quantity": "2"
//     }
//   ],
//   "mrs smith": [
//     {
//       "name": "pot",
//       "price": "100",
//       "quantity": "2"
//     },
//     {
//       "name": "knife",
//       "price": "120",
//       "quantity": "1"
//     }
//   ]
// }
//