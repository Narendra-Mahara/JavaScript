// >>>>>>>>>>>>>>>class to create complex Number<<<<<<<<<<<<<<<<<<
class complex {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }
  display() {
    console.log(`${this.real} + i${this.imaginary}`);
  }
  add(num) {
    // method to add two complex numbers
    this.real = this.real + num.real;
    this.imaginary = this.imaginary + num.imaginary;
  }
}

let a = new complex(2, 4);
let b = new complex(3, 5);
a.add(b);

a.display();

// >>>>>>>>>>>>>>>>>>>>

class human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}
class student extends human {
  constructor(name, age, rollNo) {
    super(name, age);
    this.rollNo = rollNo;
  }
  display() {
    // method overriding
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Roll No: ${this.rollNo}`
    );
  }
}

let narendra = new student("Narendra", 21, 101);
narendra.display();

console.log(narendra instanceof human)