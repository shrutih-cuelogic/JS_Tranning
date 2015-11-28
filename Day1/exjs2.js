/*2. Write a program that uses at least three ways to create an object variable,array variable.
There are different ways to create new objects:

Three ways to create an object variable:*/

//1.Define and create a single object, using an object literal.
var Cars = {carname:"Zest", brand:"Tata-Indica", price:8,55,000};

//2.Define and create a single object, with the keyword new.
var Cars = new Object();
Cars.carname = "Zest";
Cars.brand = "Tata-Indica";
Cars.price = 8,55,000;

//3.Define an object constructor, and then create objects of the constructed type.
function Cars(name, brand, price) {
    this.carname = name;
    this.brand = brand;
    this.price = price;
}
var TestCars = new Cars("Zest", "Tata-Indica", 855000);
var TestNewCars = new Cars("Swift", "Maruti-Suzuki", 700000);

/*Three ways to create an array variables:

1.Define and create simple array:*/

var colors = ["red", "blue", "green", "black"];

//2.Define and create array constructor using new keyword.
var numbers = new Array(1,2,3,4,5);// an array with 5 elements

//3.Define and create associative arrays.
/*JavaScript does not support arrays with named indexes.
  In JavaScript,arrays always use numbered indexes.*/
var colors = [];
colors[0] = "red";
colors[1] = "blue";
colors[1] = "black";
var x = colors.length;// person.length will return 3
var y = colors[1];
