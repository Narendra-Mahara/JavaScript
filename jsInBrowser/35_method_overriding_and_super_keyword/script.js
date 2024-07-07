// method overriding is a feature that allows a subclass to provide a specific implementation of a method that is already provided by its parent class. When a method in a subclass has the same name, same parameters or signature, and same return type as a method in its super-class, then the method in the subclass is said to override the method in the super-class.

// super keyword is used to access and call functions on an object's parent.

class school {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }

  result() {
    console.log("This is the result");
  }

  attendance(name) {
    console.log(`${name} is present in school`);
  }
}

class student extends school {
  attendance(name) {
    super.attendance(name);
    console.log(`Student ${name} is present`);
  }
}

class teacher extends school {
  attendance(name) {
    super.attendance(name);
    console.log(`Teacher ${name} is present`);
  }
}

let Narendra = new student();
Narendra.attendance("Narendra Mahara");

let Kamal = new teacher();

Kamal.attendance("Kamal");
