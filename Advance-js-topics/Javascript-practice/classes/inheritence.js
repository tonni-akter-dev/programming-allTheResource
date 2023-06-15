/* class Car1 {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
} */
/* class Model extends Car1 {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}
 */

/* class Details extends Model{
    constructor(brand,model,color){
        super(brand,model)
        this.color=color
    }
    show1(){
        return this.show() + " " +this.color
    }
}
let myCar = new Details("Ford", "Mustang","Black");
console.log(myCar.show1()); */

// setter and getter method==========
class Car1 {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this.carname
  }
  set carname(x) {
    return this.carname=x
  }
}


const myCar1=new Car1('Volvo')
myCar1._carname="Ford"
console.log(myCar1._carname)