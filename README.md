# _Misfits Pizza_

#### _This application will allow a user to order a pizza_

#### By _**Ben Dunham**_

## Technologies Used

* _HTML_
* _CSS_
* _JavScript_
* _JQuery_
* _Bootstrap_

## Description

_This application allows a user to select a size of pizza from three options, as well as 4 toppings out of 16 total options, and submit the form to get a price for the pizza. This also comes with a personalized message pulling the name from a user inpuuted form_

## Setup/Installation Requirements

* _Clone the project to your desktop using the command ``git clone https://github.com/bendunhampdx/138pizza``_
* _To open in your browser navigate to the project folder and open the **index.html** file_
* _To view/edit source code in **VS Code** navigate into the project using the command ``cd 138Pizza`` and then run ``code .``_


## Known Bugs

* _No known bugs_


## License

_[MIT](https://opensource.org/licenses/MIT)_

## Contact Information

_bendunhampdx@gmail.com_


## Specs
```javascript
* Describe: Order()
  Test: When user selects a size the price is updated
  Code: let pizzaSize = this.size, if(pizzaSize === "large") this.price = 20
  Expected Result = ["20"]

* Test: When user selects a topping the price is updated
  Code: order("small", "1")
  Expected Result = ["11"]

* Test: When user selects multiple toppings the price is updated
  Code: order("small", "1", "1")
  Expected Result = ["12"]
