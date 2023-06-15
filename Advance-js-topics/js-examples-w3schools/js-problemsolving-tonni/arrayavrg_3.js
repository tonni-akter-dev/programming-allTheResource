function arrayAverage(avrgArray) {
  let avrg = 0;
  for (let i = 0; i < avrgArray.length; i++) {
    avrg = avrg + avrgArray[i] / avrgArray.length;
  }
  return avrg;
}
const result = arrayAverage([10, 20, 30, 40, 50]);
console.log(result);
