function Car() {
  this.velocity = 0;  
}

Car.prototype.accelerate = function(number){
  if(!number) {
    this.velocity += 1
  } else {
    this.velocity += number;
  }
  console.log(this.velocity);
  
}
Car.prototype.break = function(number) {
  if(!number) {
    this.velocity -= 1
  } else {
    this.velocity -= number;
  } if(this.velocity < 0) {
    this.velocity = 0;
  }
  console.log(this.velocity);
}

function Bus() {
  this.velocity = 0;
  this.beep = function() {
    console.log("BEEP!");
  }
}

Bus.prototype.accelerate = Car.prototype.accelerate;
Bus.prototype.break = Car.prototype.break;

var c1 = new Car();
console.log(c1.velocity); // 0

c1.accelerate();
// c1.velocity; // 1;

c1.accelerate(5);
// c1.velocity; // 6;

c1.break();
// c1.velocity; // 5

c1.break(4);
// c1.velocity; // 1

c1.break(4);
// c1.velocity; // 0

console.log("//***** Bus *****//");

var bus = new Bus();
console.log(bus.velocity); // => 0

bus.accelerate();
bus.velocity; // => 1

bus.accelerate(2);
bus.velocity; // => 3

bus.break();
bus.velocity; // => 2

bus.break(2);
bus.velocity; // => 0

bus.beep(); // => "BEEP!"