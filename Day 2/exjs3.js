/*Write a program that can make the use of 'reserved' keywords 
in JS without getting any error.*/

1)
var x = "John";              // x is a string
var y = new String("John"); 
console.log(typeof(y)); //object

2)
var i = 0;
for (; i < 9; i++) {
    console.log(i); //prints 0 to 9 numbers
}

3)
var i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i); // prints 0,1,2,3
  i++; //prints 3 
}
//Output:0,1,2,3,3.
