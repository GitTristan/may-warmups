function Guitar(brand, color, numberOfStrings) {
  this.brand = brand;
  this.color = color;
  this.numberOfStrings = numberOfStrings;
  var that = this;

  return {
    toString: function() {
      return "A " + that.color + " " + that.brand + " with " + that.numberOfStrings + " strings";
    },
    getBrand: function() {
      return that.brand;
    },
    setBrand: function(newBrand) {
      that.brand = newBrand;
    };
  };
};

var axe = new Guitar("fender", "Sunburst red", "6");

axe.toString();
