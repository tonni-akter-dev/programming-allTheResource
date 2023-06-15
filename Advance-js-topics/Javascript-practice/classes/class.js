class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  run() {
    console.log(this.name + " is running");
  }
}

const bmw = new Car("BMW", 2019);
const audi = new Car("Audi", 2019);
// bmw.run();
// audi.run();
