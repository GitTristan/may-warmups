function multiplication(string) {
  var array = string.split('*');
  var result = 1;
  for (var i = 0; i < array.length; i++)
    result *= Number(array[i]);
  return result;
}


console.log(multiplication("1*2*10*12*20*22"));
// 105600
