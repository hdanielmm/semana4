function Car() {
  this.velocity = 0;  
}

function Bus() {
  this.velocity = 0;
  this.beep = function() {
    console.log("BEEEP!");
  }
}

Object.prototype.accelerate = function(number){
  if(!number) {
    this.velocity += 1
  } else {
    this.velocity += number;
  }
  console.log(this.velocity);
  
}
Object.prototype.break = function(number) {
  if(!number) {
    this.velocity -= 1
  } else {
    this.velocity -= number;
  } if(this.velocity < 0) {
    this.velocity = 0;
  }
  console.log(this.velocity);
}

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



//**************************************************/

/*function Car(velocity) {
  this.velocity = 0
}
Car.prototype.accelerate = function (num) {
  if (num === undefined) {
    this.velocity++
  } else {
    this.velocity = this.velocity + num
  }
};

Car.prototype.breakk = function (num) {
  if (num === undefined) {
    this.velocity--
  } else {
    this.velocity = this.velocity - num
  }
  if (this.velocity < 0) {
    this.velocity = 0
  }
}

function Bus(velocity) {
  this.velocity = 0
}

Bus.prototype.accelerate = Car.prototype.accelerate;
Bus.prototype.breakk = Car.prototype.breakk;
Bus.prototype.beep = function () {
  console.log('BEEP!')
}

var bus = new Bus()
console.log(bus.velocity) // => 0
bus.accelerate(3)
console.log(bus.velocity); // 3
bus.breakk()
console.log(bus.velocity) // 2
bus.beep()*/


/*var c1 = new Car()
console.log(c1.velocity) // 0

c1.accelerate()
console.log(c1.velocity) // 1;

c1.accelerate(5)
console.log(c1.velocity) // 6;

c1.breakk()
console.log(c1.velocity) // 5

c1.breakk(4)
console.log(c1.velocity) // 1

c1.breakk(4)
console.log(c1.velocity) // 0 */


/*function Car() {
  this.velocity = 0;
}
Car.prototype.accelerate = function (n = 1) {
  return n > 0 ? this.velocity += n : this.velocity;
}
Car.prototype.break = function (n = 1) {
  return n > this.velocity ? this.velocity = 0 : this.velocity -= n;
}

function Bus() {
  Car.call(this);
  Bus.prototype.beep = function () {
    return 'BEEP!'
  }
}

var bus = new Bus()
console.log(bus.velocity) // => 0
bus.accelerate(3)
console.log(bus.velocity); // 3
bus.breakk()
console.log(bus.velocity) // 2
bus.beep() */


/*function Car() {
  this.velocity = 0;
  this.wheels = 4;
}
Car.prototype.accelerate = function(n=1) {
  this.velocity += n > 0 ? n : 0;
};
Car.prototype.break = function(n=1) {
  this.velocity = n > this.velocity ? 0 : this.velocity - n;
}

function Bus() {
  this.velocity = 0;
  this.wheels = 4;
}
Bus.prototype = new Car();
Bus.prototype.beep = function() {
  return 'BEEP!'
}

var car2 = new Car();
car2.accelerate();

var bus2 = new Bus();
bus2.accelerate(10);

var bus = new Bus()
console.log(bus.velocity) // => 0
bus.accelerate(3)
console.log(bus.velocity); // 3
bus.break()
console.log(bus.velocity) // 2
console.log(bus.beep());*/






// polyfill o shim
// if (!String.prototype.reverse) {
//   String.prototype.reverse = function () {
//     return this.split("").reverse().join("");
//   } 
// }

// String.prototype.charAt = function(n) {
//   return "Hola"
// }

// console.log("Hola Mundo".charAt(8));
