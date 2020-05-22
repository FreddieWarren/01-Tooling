class Counter {
  constructor(text) {
    // TODO: build an internal Map of word => occurrences.
    this.text = text.toLowerCase();
    this.countObject = {};
  }

  count() {
    const textArray = this.text.split(" ");
    const textWords = this.text.split(" ");
    textWords.forEach((el) => {
      this.countObject[el] = 0;
    });
    textWords.forEach((el) => {
      if (textArray.includes(el)) {
        this.countObject[el] += 1;
      }
    });
    return this.countObject;
  }

  occurrences(word) {
    this.word = word.toLowerCase();
    // TODO: return the number of occurrences#
    if (this.countObject[word]) {
      return this.countObject[word];
    } return 0;
  }
}

module.exports = Counter;

const myCounter = new Counter("Lorem ipsum dolor sit amet, consectetur adipisicing elit elit elit");

myCounter.count();

myCounter.occurrences("Lorem");

console.log(myCounter.occurrences("elit"));

// class Counter {
//   constructor(text) {
//     this.map = new Map();
//     if (text && text.length > 0) {
//       text.split(" ").forEach((term) => {
//         const lowerTerm = term.toLowerCase();
//         this.map.set(lowerTerm, (this.map.get(lowerTerm) || 0) + 1);
//       });
//     }
//   }

//   occurrences(word) {
//     return this.map.get(word.toLowerCase()) || 0;
//   }
// }

// module.exports = Counter;
