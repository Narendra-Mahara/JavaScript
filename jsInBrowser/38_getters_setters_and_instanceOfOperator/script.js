// get is used to get the value of a property of an object.
// set is used to set the value of a property of an object.

// example:
class Vehicle {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  show() {
    console.log(`Vehicle name is ${this.name} and price is ${this.price}`);
  }

  get getName() {
    return this.name;
  }

  set setName(newName) {
    this.name = newName;
  }
}

let Audi = new Vehicle("Audi", "1200000");

console.log(Audi.getName); // Audi
Audi.setName = "BMW";
console.log(Audi.getName); // BMW
// In this example, the getName getter is used to get the value of the name property of the Vehicle class. The setName setter is used to set the value of the name property of the Vehicle class.

// instanceof operator
// The instanceof operator is used to check the type of an object. It returns true if the object is an instance of a class, otherwise it returns false.

// example:
class Vehicle2 {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  show() {
    console.log(`Vehicle name is ${this.name} and price is ${this.price}`);
  }
}

let Audi2 = new Vehicle2("Audi", "1200000");

console.log(Audi2 instanceof Vehicle2 + "instanceof Operator result:"); // true
