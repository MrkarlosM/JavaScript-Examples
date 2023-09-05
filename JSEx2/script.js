/*
Second Example

Carlos Martínez
*/

//We will create an object, this is a
const car = {
  brand: "Mazda",
  year: 2001,
  sound: function mazdaSound() {
    console.log("This is Mazda Sound");
  },
};

//We can even create a class for vehicles

//This is a base class with a constructor
class Vechicles {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
}

//This is an extended class
class Automovile extends Vechicles {
  wheels = 4;
  constructor(brand, year, model) {
    super(brand, year);
    this.model = model;
  }

  honk() {
    console.log("beep beep!");
  }
}

//Now we will create an object of an Automovile class
const car2 = new Automovile("Kia", 2022, "Picanto");
console.log(car2);
