// static method is the method which is called on the class itself and not on the instance of the class. It is defined using the static keyword. It is generally used to create utility functions(refers to a collection of functions that are designed to perform common, reusable tasks across the application. These functions are not directly related to the core functionality of the application but are used to support or enhance it. Examples of utility functions include formatting dates, manipulating strings, handling numbers, and other general-purpose tasks that can be abstracted away to reduce code duplication and improve maintainability.).

// example:
class Vehicle {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  show() {
    console.log(`Vehicle name is ${this.name} and price is ${this.price}`);
  }

  static isSupercar(name) {
    if (name === "Bugatti" || name === "Lamborghini" || name === "Ferrari") {
      return "Yes, it is a supercar";
    }
    return "No, it is not a supercar";
  }
}

let Audi = new Vehicle("Audi", "1200000");
console.log(Vehicle.isSupercar("Audi")); // No, it is not a supercar
console.log(Vehicle.isSupercar("Bugatti")); // Yes, it is a supercar
