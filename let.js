"use strict"
/*
let x = "John Doe";
let x; // Cant Declare more than one with let

*/
/*
var x = 10;
var x = 12; // with var we can redeclare
*/
// let x = "Hello World";
{ // eita ekta block scope
    let x = "Hello World";
    {
        console.log(x);
    }
}
// let came in 2015
var x = 5;
function sleep(){ // function scope
    console.log("Gone to bed");
    console.log("Wake up from bed");

}
// sleep();
if (true){ // eitao block scope
    console.log("It is true");
}
// console.log(x);