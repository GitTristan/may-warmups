var additionString = "1+2+10+12+20+22"

var additionFn = function(string) {
  string.split('+').reduce(sum, val) {
    return sum + Number(val);
  }, 0);
};

console.log(additionFn(additionString))
// 67
