function Set(array) {
  this.array = array;
  var that = this;

  return {
    asSet: function() {
      var result = [];
      for (var i = 0; i< that.array.length; i++) {
        if (result.indexOf(that.array[i]) == -1) result.push(that.array[i]);
      };
      return result;
    };
  };
  return {
    toString: function() {
      var result = {};
      return ['{', this.asSet().join(','), '}'].join('');
    };
  };
};

var set = new Set([11,2,3,4,2,2,4,3]);
console.log(set.asSet()); // [11,2,3,4]
console.log(set.toString()); // {11, 2, 3, 4}

var wordSet = new Set(['foo', 'foo', 'bar', 'bar', 'baz', 'ski', 'bar', undefined, undefined]);
console.log(wordSet.asSet()); // ['foo','bar', 'baz', 'ski', undefined]
console.log(wordSet.toString()); // {'foo','bar', 'baz', 'ski', }
