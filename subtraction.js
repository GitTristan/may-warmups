var subtractionString = "100-12-20";

var subtractionFn = function(string) {
  string.split('-').reduce(function(sum, val) {
    return sum - Number(val);
  });
};

console.log(subtractionFn(subtractionString));
