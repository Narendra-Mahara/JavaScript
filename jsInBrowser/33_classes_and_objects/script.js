// class in javascript is  a blueprint(template) for creating objects with pre-defined properties and methods.

// syntax:>>
// class ClassName {
//   constructor() {
//      properties
//   }
//    methods
// }

// constructor is a special method that is called when an object is created. It is used to initialize the object's properties.

class car {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  // method
  show() {
    console.log(`Car name is ${this.name} and price is ${this.price}`);
  }
}
let Narendra = new car("Audi", "1200000");
Narendra.show();
