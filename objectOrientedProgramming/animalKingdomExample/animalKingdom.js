/**
*	This is an example of class
*/

'use strict'


class breakfast {
        constructor(protein) {
            this.protein = protein;
        }
        static staticMethod() {
            return console.log('classy');
        }
        prototypeMethod() {
	        let something = 500000 * 500000
            return console.log(something);
        }
    }
    let eggs = new breakfast("Eggs");
    
    //console.log(eggs); 
    //eggs.prototypeMethod()
	console.log(eggs);