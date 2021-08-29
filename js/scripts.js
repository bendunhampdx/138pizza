// Business Logic

function Order(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Order.prototype.orderPrice = function() {
  let pizzaSize = this.size
  if(pizzaSize === "small") {
    this.price += 10
  } else if (pizzaSize === "medium") {
    this.price += 15
  } else if (pizzaSize === "large") {
    this.price += 20
  }
  if (this.toppings.length >= 1) {
    for (let topping of this.toppings) {
      this.price += 1.50;
    }
  } else {
    this.price;
  }
  return this.price;
}












// User Interface Logic

$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    let pizzaSize = $("input:radio[name=size]:checked").val();
  })
})