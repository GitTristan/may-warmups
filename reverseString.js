var string = "foobar";
var reversedString = function(string) {
  return string.split('').reverse().join('');
};

console.log(reversedString(string));
