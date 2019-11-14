export var Pizza = function (topping, size) {
  this.topping = topping;
  this.size = size;
  this.price = 0;
};
Pizza.prototype.getPrice = function() {
  for(var i = 0; i < this.topping.length; i++){
    this.price += 1;
  }
  if(this.size === "BigBoi"){
    this.price += 20;
  }
  if(this.size === "SmallBoi"){
    this.price += 10;
  }
  else
    return this.price;
};
