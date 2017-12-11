/**
 * simple string reversal :)
 */
(function(string){
  return string.split("").reverse("").join("");
})('string to reverse');

/**
 * Quick reduce string reversal :)
 * functional programming style
 */
(function(string){
  return string.split("").reduce((total, item) => {
    total.unshift(item);
    return total;
  }).join("")
})('string to reverse');
