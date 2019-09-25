class Car{
  constructor() {
    this.velocity = 0;
    this.accelerate = (n = 1) => this.velocity += n > 0 ? n : 0;
    this.break = (n = 1) => this.velocity -= n < this.velocity ? n : this.velocity;
  }
}

class Bus extends Car{
  constructor(){
    super();
  }
  beep(){
    return 'BEEP!'
  }
}

var car2 = new Car();
car2.accelerate();

var bus2 = new Bus();
bus2.accelerate(10);

var bus = new Bus();
console.log(bus.velocity) // => 0
bus.accelerate(3);
console.log(bus.velocity); // 3
bus.break(5);
console.log(bus.velocity); // 2
console.log(bus.beep());
