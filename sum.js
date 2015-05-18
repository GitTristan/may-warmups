function sumOfArgs() {
  var i;
  sum = 0;
  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};

sumOfArgs(1,2,3,4,5,6,7,8,9,10);
// 55
