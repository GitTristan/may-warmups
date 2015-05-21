function addition(string) {
  return string.split('+').reduce(function(prev, curr) {
    return prev + Number(curr);
  }, 0);
}

function multiplication(string) {
  return string.split('*').reduce(function(prev, curr) {
    return prev * Number(curr);
  }, 1);
}

mixedOps("1+2*3")

function mixedOps(string) {
  return addition(string.split('+').map(multiplication).join('+'));
  return addition(['1','2*3'].map(multiplication).join('+'))
  return addition([1, 6].join('+'))
  return addition('1+6'); // 7
}
