// overriding constructor is not possible in JavaScript. If a subclass has a constructor, it needs to call super() before using "this". If we don't call super() in the constructor, it will throw a reference error.

// example:
// class Vehicle {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   show() {
//     console.log(`Vehicle name is ${this.name} and price is ${this.price}`);
//   }
// }

// class Car extends Vehicle {
//   constructor(name, price, model) {
//     this.model = model;
//   }
// }

// let Scorpio = new Car("Scorpio", "1200000", "N");
// Scorpio.show();
// ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
// In this example, the Car class extends the Vehicle class. The Car class has a constructor, but it doesn't call super(). So, it throws a reference error.

// To fix this error, we need to call super() in the constructor of the Car class.
class Vehicle {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  show() {
    console.log(`Vehicle name is ${this.name} and price is ${this.price}`);
  }
}

class Car extends Vehicle {
  constructor(name, price, model) {
    super(name, price);
    this.model = model;
  }
}

let Scorpio = new Car("Scorpio", "1200000", "N");
Scorpio.show(); // Vehicle name is Audi and price is 1200000
// In this example, the Car class extends the Vehicle class. The Car class has a constructor that calls super(). So, it doesn't throw a reference error.
