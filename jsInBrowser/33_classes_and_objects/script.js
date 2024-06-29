// class in javascript is  a blueprint(template) for creating objects with pre-defined properties and methods.

// syntax:>>
// class ClassName {
//   constructor() {
//      properties
//   }
//    methods
// }

class car {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
let car1 = new car("Audi", "1200000");
console.log(car1);
    