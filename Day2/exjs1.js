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


function Add() {
    if(arguments.length < 2){
      throw "Atleast two argument should be passed";
    }
    else if(typeof(arguments[0] && arguments[1] == 0)){
      return arguments[0] + arguments[1];
    }
}Add(12, 3)

function Sub() {
    if(arguments.length < 2){
      throw "Atleast two argument should be passed";
    }
    else if(typeof(arguments[0] && arguments[1] == 0)){
      return arguments[0] - arguments[1];
    }
}Sub(12, 3)

function Div() {
    if(arguments.length < 2){
      throw "Atleast two argument should be passed";
    }
    else if(typeof(arguments[0] && arguments[1] == 0)){
      return arguments[0] / arguments[1];
    }
}Div(12, 3)

function Mul() {
    if(arguments.length < 2){
      throw "Atleast two argument should be passed";
    }
    else if(typeof(arguments[0] && arguments[1] == 0)){
      return arguments[0] * arguments[1];
    }
}Mul(12, 3)