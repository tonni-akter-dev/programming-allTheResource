var res = "";
for (let i = 0; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    res += `${i} * ${j} = ${i * j} \n`;
  }
  res += "\n";
}
console.log(res);
