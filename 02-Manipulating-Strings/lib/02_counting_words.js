function occurrences(text, word) {
  let wCounter = 0;
  const textArray = text.split(" ");

  textArray.forEach((el) => {
    if (el.toLowerCase() === word.toLowerCase()) {
      wCounter += 1;
    }
  });

  return wCounter;
}

module.exports = occurrences;

