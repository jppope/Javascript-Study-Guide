
### Variables && assignments


Rules: 
*	Default to let
*	use const if you want semi immutable (i.e. no re-assignment)
*	use Object.freeze('')... to get real immutability
*	var for global variables... you know they will always get through


// let is "block level" or basically will stay inside its curly braces.

for(let i = 0; i < 10; i++){
	
}
// let can't be accessed outside of this



/**
 *	 Const
 */
const months = ["January","February"];
// we can still add "march"
months.push("March")


/**
 *	 Const immutable
 */
//const months = Object.freeze(["January","February"]);
// the object is now immutable
//months.push("March")