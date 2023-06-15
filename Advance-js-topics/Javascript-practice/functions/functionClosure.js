/* function add() {
  let counter = 0;
  counter += 1;
  return counter;
}

console.log(add())
console.log(add())
console.log(add())  */ //3 deoar kotha but 1 disse karon counter call hole she abr 0 reset korse

// ai problem solve er jonno closure ashbe=======
function temporary() {
  let counter = 0;
  return function () {
   return  counter += 1;
  };
}

const add=temporary()
console.dir(add)
function myCounter(){
    document.getElementById('count').innerHTML=add()
}