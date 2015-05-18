function Guitar(brand, color, numberOfStrings) {
  this.brand = brand;
  this.color = color;
  this.numberOfStrings = numberOfStrings;
};

var axe = new Guitar("fender", "Sunburst red", "6");

Guitar.prototype.toString = function() {
  return "A " + axe.color + " " + axe.brand + " with " + axe.numberOfStrings + " strings";
};

axe.toString();

Guitar.prototype.paint = function(newColor) {
  return this.color = newColor;
};

axe.paint("midnight blue");
axe.toString();
