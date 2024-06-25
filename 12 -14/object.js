// javascript e sob kichui object.
let car = { //object er khetre amra const type use korbo

    color : "green",
    name : "ford",
    model : "28A",
    weight: "250kg",
    start : function (){
        console.log(this.color + " 28A started")
    },
    drive: function(){
        console.log("car is driving")
    }
}
console.log(car.name);
console.log(car["model"])
car.start();
car.drive();