/**
 * example 1 of recursion
 */

let countDownFrom = (num) => {
	if (num === 0) return;
	console.log(num)
	countDownFrom(num -1);
}
countDownFrom(10)