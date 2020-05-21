function insertDash(word) {
  // TODO: implement the method and return word with dashes
  const consonants = ["q", "w", "r", "t", "y", "p", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

  const wordArray = word.split("");

  for (let i = 0; i < wordArray.length; i += 1) {
    if (consonants.includes(wordArray[i]) && consonants.includes(wordArray[i + 1])) {
      wordArray.splice(i + 1, 0, "-");
    }
  }
  return wordArray.join("");
}

module.exports = insertDash;

console.log(insertDash("internationalization"));
