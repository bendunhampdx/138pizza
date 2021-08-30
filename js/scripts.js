// Business Logic

function Order(size, meatOne, meatTwo, vegOne, vegTwo) {
  this.size = size;
  this.meatOne = meatOne;
  this.meatTwo = meatTwo;
  this.vegOne = vegOne;
  this.vegTwo = vegTwo
  this.price = 0;
}

Order.prototype.orderPrice = function() {
  let pizzaSize = this.size
  let zaMeat1 = this.meatOne
  let zaMeat2 = this.meatTwo
  let zaVeg1 = this.vegOne
  let zaVeg2 = this.vegTwo
  if(pizzaSize === "small") {
    this.price += 10
  } else if (pizzaSize === "medium") {
    this.price += 15
  } else if (pizzaSize === "large") {
    this.price += 20
  }
  if (zaMeat1 === "1") {
    this.price += 1
  } else if (zaMeat1 === "0") {
    this.price;
  }
  if (zaMeat2 === "1") {
    this.price += 1
  } else if (zaMeat2 === "0") {
    this.price;
  }
  if (zaVeg1 === "1") {
    this.price += 1
  } else if (zaVeg1 === "0") {
    this.price;
  }
  if (zaVeg2 === "1") {
    this.price += 1
  } else if (zaVeg2 === "0") {
    this.price;
  }
  return this.price;
}

// User Interface Logic

$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();
    const nameInput = $("input#person1").val();
    let pizzaSize = $("input:radio[name=size]:checked").val();
    let zaMeat1 = $("#meat1").val();
    let zaMeat2 = $("#meat2").val();
    let zaVeg1 = $("#veggie1").val();
    let zaVeg2 = $("#veggie2").val();
    let order = new Order(pizzaSize, zaMeat1, zaMeat2, zaVeg1, zaVeg2)
    order.orderPrice();
    $('#output').text(order.price).prepend("$")
    $(".message").text(nameInput)
    $(".display").show();
  })
})