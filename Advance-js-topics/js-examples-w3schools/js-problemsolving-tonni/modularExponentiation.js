// 1. Given three numbers x, y, and p, compute (xˆy) % p. (This is modular exponentiation.)

/* function modularExponentiation(base, exponent, modulus) {
  return Math.pow(base, exponent) % modulus;
}


console.log(modularExponentiation(2,3,10)) */ //this code does not apply for large exponential

// for large number
/* const modularExponentiation1 = (base, exponent, modulus) => {
  if (modulus == 1) return 0;
  var value = 1;
  for (let i = 0; i < exponent; i++) {
    value = (value * base) % modulus;

  }
  return value
};
console.log(modularExponentiation1(2,3,10))
//Time Complexity: O(n) 
*/