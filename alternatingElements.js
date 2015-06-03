function alternatingElements(array1, array2) {
  result = [];
  for (var i = 0; i < array1.length; i++) {
    result.push(array1[i], array2[i]);
  }
  return result;
}


console.log(alternatingElements(['a','b','c'], [1,2,3])); // ['a',1,'b',2,'c',3]
