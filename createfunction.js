function mult(a, b){
    return a*b;
    console.log("I won't be printed");
}
let x = mult(10, 5);
let y = mult;
console.log(x);
console.log(mult(5, 4));
console.log(y(10, 20));