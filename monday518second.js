// Warmups
// 1) I am going to create a function called isUnique that uses filter
// to iterate through the array and return with duplicates removed.  It will do this by
// compairing each element by the index.
// 2)

// 3)

var array = [1,2,3,4,5,6,7,8,9,10,9,8];

var isUnique = array.filter(function(element, index, self) {
  return index == self.indexOf(element);
)};

console.log(isUnique(array));
