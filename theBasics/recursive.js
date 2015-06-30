
/*
	Recursive functions are very simple thing to state, but a somewhat difficult thing to get a handle on.
	
	=> In short they are a function that has that very same function inside of itself.

	This may seem useful, and it can be but the reality is that they are a very different kind of loop and a little 
	difficult to get the hang of in practice.
	
	"In Theory, there is no difference between practice and theory, in practice there is..."
	
*/
	
	


// per the medium article: https://medium.com/functional-javascript/recursion-282a6abbf3c5

function factorial(n, accumulator) {
  if (n === 0) {
    return accumulator
  }
  else{
  return factorial(n — 1, n * accumulator)
  }
}
factorial(5, 1); //==>> 120





var recursiveResources = ["http://www.independent.co.uk/incoming/article9358355.ece/alternates/w620/culkin.JPG", "https://imagemacros.files.wordpress.com/2010/10/your_mother_is_fat2.jpg?w=720", "https://medium.com/functional-javascript/recursion-282a6abbf3c5"]

