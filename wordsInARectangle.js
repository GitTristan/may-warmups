function repeat(string, numberOfTimes) {
  var result = '';
  for (var i = 0; i < numberOfTimes; i++)
    result += string;
  return result;
}

function stars(number) {
  return repeat('*', number);
}

console.log(stars(6)); // '******'

function lengthOfLongestWord(words) {
  Math.max.apply(null, words.map(function(word) { return word.length; }));
  // second solution
  // return words.reduce(function(prev, curr) {
  //   return prev.length > curr.length ? prev : curr;
  // }).length;
}

console.log(lengthOfLongestWord(['foo', 'bar', 'baszy'])); // 5

function padWord(word, maxWidth) {
  var difference = maxWidth - word.length;
  return word + repeat(' ', difference);
}

console.log('"' + padWord('foo', 6) + '"'); // 'foo   '

function printRow(string) {
  return '* ' + string + ' *' + '\n';
}

console.log(printRow('foo')); // '* foo *\n'

function wordsInARectangle(words) {
  var longestWord = lengthOfLongestWord(words);
  var longestLine = longestWord + 4;
  var result = stars(longestLine) + '\n';

  words.forEach(function(word, index) {
    result += printRow(padWord(word, longestWord));
  });

  result += stars(longestLine);

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
