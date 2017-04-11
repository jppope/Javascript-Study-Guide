/**
 * Promises
 * the simplest example that you can do
 */

//assign a promise to a variable
let thing = new Promise((resolve, reject) => resolve('this is the item'))

// resolve the returned value at a later time
thing.then((item) => console.log(item))