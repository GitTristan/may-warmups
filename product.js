function productOfArgs() {
  var i;
  product = arguments[0];
  for (i = 0; i < arguments.length; i++) {
    product *= arguments[i];
  }
  return product/arguments[0];
};

productOfArgs(3,3,4,5,6);
// 720
