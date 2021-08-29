// Business Logic

function Order(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Order.prototype.price = function() {
  let pizzaSize = this.size
  if (pizzaSize === "large") {
    this.price = 20;
  } else if (pizzaSize === 'medium') {
    this.price = 15;
  } else if (pizzaSize === 'small') {
    this.price = 12;
  } else {
    this.price = 0;
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