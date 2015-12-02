/*1. Write a program to create functions that will do the following 
    1. Add 2 numbers
    2. Subtract 2 numbers
    3. Divide 2 numbers
    4. Multiply 2 numbers
    Then update the program to get dynamic no of arguments
    (there can be 2,3,4 etc no of variables passed in when invoking the functions) 
    The function should accept at least 2 variables and throw error 
    if less then 2 are passed. The function should also validate the 
    type of argument passed in */

function Add(a, b) {
    return a + b;
}Add(12, 3);

function Sub(a, b) {
    return a - b;
}Sub(12, 3);

function Div(a, b) {
    return a / b;
}Div(12, 3);

function Mul(a, b) {
    return a * b;
}Mul(12, 3);

/*
The arguments variable is a special variable in Javascript, available within any function. 
It's not a true array, but it contains the argument values passed to the function 
which can be accessed like array elements 
(so, arguments[0] is the first argument, arguments[1] is the second, and so on).
*/
function Addargs() {
    var a = 0;
    for (var i=0; i < arguments.length; i++) {
      a += arguments[i];
    }
    return a;
}Addargs(1, 2, 3, 4);

function Subargs() {
    var a = 0;
    for (var i=0; i < arguments.length; i++) {
      a -= arguments[i];
    }
    return a;
}Subargs(1, 2, 3, 4);

function Mulargs() {
    var a = 0;
    for (var i=0; i < arguments.length; i++) {
      a *= arguments[i];
    }
    return a;
}Mulargs(1, 2, 3, 4);

function Divargs() {
    var a = 0;
    for (var i=0; i < arguments.length; i++) {
      a /= arguments[i];
    }
    return a;
}Divargs(1, 2, 3, 4);
