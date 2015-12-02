/*
1. Write a program to create variables of the following types:
        int
        string
        boolean
        object
        array
    then add values in array(can be value of any type). Delete values from the array using array built in methods. 
    Toggle values of boolean variables
    Concatenate string with more values(without creating new string variables)
*/
var size = 20;
var name = 'Shruti';
var isbool = true;
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
};
var list = ["abc", "pqr", "xyz"];

var arr = [];
arr.push(size); // adding new var to an array
arr.push(name);
arr.push(list);

var del_arr = arr.pop(size) // deleting element existing in the array

isbool = !isbool; // toggle values of boolean arrays

name += " Shivanand" + " Hiremath";
