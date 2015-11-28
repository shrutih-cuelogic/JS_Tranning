/*Write a program that will print number from 1 to 100 using 
all the variants of a loop structure(for,while,do while etc) */

//for loop
for (var i = 1; i < 101; i++) {
   console.log(i);
}

//while loop
var i = 1, sum = 0;

    while (i<101) {

      sum += i; 
      console.log(i++);

    }

//do while
var i = 1, sum = 0;
do{ 

      sum += i; 
      console.log(i++);
    }while(i < 101);