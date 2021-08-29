// Business Logic

function Order(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

Order.prototype.price = function() {
  if (this.size === "large") {
    this.price = 20;
  } else if (this.size === 'medium') {
    this.price = 15;
  } else if (this.size === 'small') {
    this.price = 12;
  } else {
    this.price = 0;
  }
}












// User Interface Logic

$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();

  })
})