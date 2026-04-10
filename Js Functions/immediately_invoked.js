// short form :- IIFE (Immediately Invoked Function Expression)

(function () {
    console.log("I am an IIFE");
})(); // this will invoke the function immediately after its definition

(function (name,age,city) {
    console.log(`My name is ${name} and I am ${age} years old and I live in ${city}`);
})("virat", 35, "bengaluru"); 

 // this will invoke the function immediately with the provided arguments

//example 1

(function(){
    var a = 10;
    var b = 20;
    console.log(`The sum of a and b is ${a + b}`);
})