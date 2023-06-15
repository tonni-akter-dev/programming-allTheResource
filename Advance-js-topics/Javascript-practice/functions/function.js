// function declaration
function name() {}

// function expression---variable er maddhome function declaration
/* var x=function(a,b){
    return a*b
}
let y=x(4,5)
console.log(y)
 */

// function constructor----- using [new Function] keyword
/* const myFunc=new Function('a','b','return a*b')
let x=myFunc(4,5)
console.log(x)
 */

// function hoisting e function declaration er agei call kora jay js a
/* console.log(myFunct(5));
function myFunct(y) {
  return y * y;
}
 */

// self invoking function---------------
/* (function () {
  let x = "hi";
  console.log(x);
})();
 */

/* function myFunc1() {
    return 5
}
// let x=myFunc1()
console.log(typeof myFunc1())  //function call korle ja return korbe tar type dekhabe ar function call na korle type function dekhabe */

// functions are objects=========
/* function myFunc(a,b){
return arguments.length
}
console.log(myFunc(4,5,6)) */

// The toString() method returns the function as a string:
/* function myFunc(a, b) {
  return a * b;
}
let text=myFunc.toString()
console.log(typeof text)
 */

// Arrow function======

// const x=(x,y)=>x*y
/* function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
  console.log(x) */

/* --------------find maximum value------------------- */
/* function maxFunc() {
  //   let max = 0; //or
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;   
}
let x = maxFunc(4, 10, 2, 8, 7, 9, 6, 40, 30, 100);
console.log(x);
 */

// invoking a method-----------
/* const myObj = {
  fname: "Tonni",
  lname: "Akter",
  fullName: function () {
    return this //return an object { fname: 'Tonni', lname: 'Akter', fullName: [Function: fullName] }
  },
};
console.log(myObj.fullName());
 */

/* const myObj = {
  fname: "Tonni",
  lname: "Akter",
  fullName: function () {
    return this.fname + " " + this.lname;
  },
};
console.log(myObj.fullName());
 */

// Invoking a Function with a Function Constructor---------------

/* const person = {
  fullname: function () {
    return this.fname + " " + this.lname;
  },
};
const person1={
    fname:"Tonni",
    lname:"Akter"
}
const person2={
    fname:"Ayat",
    lname:"Islam"
}

console.log(person.fullname.call(person1))
console.log(person.fullname.call(person2))
 */
// call() method with arguments------
/* const person = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  },
};
const person1 = {
  firstName: "John",
  lastName: "Doe",
};

person.fullName.call(person1, "Oslo", "Norway"); //call() method a argument pass hoy parameter akare
 */

/* ------------appply method same as call()======================= */
/* const person = {
    fullname: function () {
      return this.fname + " " + this.lname;
    },
  };
  const person1={
      fname:"Tonni",
      lname:"Akter"
  }
  const person2={
      fname:"Ayat",
      lname:"Islam"
  }
  
  console.log(person.fullname.apply(person1))
  console.log(person.fullname.apply(person2)) */
 /*  const person = {
    fullName: function (city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    },
  };
  const person1 = {
    firstName: "John",
    lastName: "Doe",
  };
  
 console.log( person.fullName.apply(person1, ["Oslo", "Norway"])); //apply() method a argument pass hoy array akare
 */

//  bind() method
const person = {
    // firstName:"John",
    // lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  const member1 = {
    firstName:"Tonni",
    lastName: "Akter",
  }
  
  let fullName = person.fullName.bind(member1); //bind mane bedhe rakha fullname diye bedhe rakhse member1 ke tai fullname er property sob member1 e pabe tai er first and last name gulo full name e parameter hishebe jabe