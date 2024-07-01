// Inheritance is a way to create a new class based on an existing class. The new class is called a child, and the existing class is called a parent. The child inherits all the properties and methods of the parent, and it can also have additional properties and methods.

// The extends keyword is used to create a child. The syntax
// class child extends parent {
//   constructor() {
//     super();
//   }
// }


// Example:
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

  info() {
    console.log(
      `Car name is ${this.name}, model is ${this.model} and price is ${this.price}`
    );
  }
}

let Audi = new Car("Audi", "1200000", "A4");
Audi.info(); // Car name is Audi, model is A4 and price is 1200000
// In this example, the Car class extends the Vehicle class. The Car class inherits the properties and methods of the Vehicle class. The Car class has an additional property model.
Audi.show();

// child can access parent class method but parent class can't access child class method.
