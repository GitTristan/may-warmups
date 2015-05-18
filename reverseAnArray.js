var array = [1,2,3,4,5]
function reverseAnArry(array) {
  var result = [];
  for(i=array.length-1;i>=0;i--){
    result.push(array[i]);
  };
  return result;
};

console.log(reverseAnArry(array));
