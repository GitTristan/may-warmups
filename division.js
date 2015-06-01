var divisionString = "100/20"

var divisionFn = function(string) {
  string.split('/').reduce(function(sum, val) {
    return sum / Number(val);
  });
};

console.log(divisionFn(divisionString))
