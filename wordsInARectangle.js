function stars(number) {
  var result = '';
  for (var i = 0; i < number; i++) {
    result += '*'
  }
  return result;
}

console.log(stars(6)); // "******"

function lengthOfLongestWord(words) {
  return words.reduce(function(prev, curr) {
    return prev.length > curr.length ? prev : curr;
  }).length;
}

console.log(lengthOfLongestWord(['foo', 'bar', 'bazzy'])); // 5

function padWord(word, maxWidth) {
  var difference = maxWidth - word.length;
  var result = "";
  if (difference > 0) {
    for (var i = 0; i < difference; i++) {
      padding += " ";
    }
  }
  return word + padding;
}

function printRow(string) {
  return "* " + string + " *" + '\n';
}

function wordsInARectangle(words) {
  var result = '';

  var longestWord = lengthOfLongestWord(words);

  words.forEach(function(word, index) {

  });

  return result;
}


console.log(wordsInARectangle(["Hello", "World", "in", "a", "frame"]));
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********
