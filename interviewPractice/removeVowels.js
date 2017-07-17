/**
 * Remove the vowels from a string
 */

var testWord = 'tattoo'

function vowels(letter){
  if (letter != 'a' || letter != 'e' || letter != 'i' || letter != 'o' || letter != 'u'){
    return letter;
  }
}

function removeThem(word){
  return word.split("").filter(vowels).join("");
}
