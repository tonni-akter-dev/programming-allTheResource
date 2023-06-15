// find the maximum value of an array in js
const array = [10, 40, 100, 50, 60,200];
let max = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}
console.log(max);
