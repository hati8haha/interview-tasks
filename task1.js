function powerOfThree(n) {
  if (n === 1 || n === 3 || n === -1 || n === -3) return true;
  if (n === 0 || n % 3 !== 0) return false;
  return powerOfThree(n / 3);
}

/* 測試資料
console.log(powerOfThree(2 ** 31 - 1)); //false
console.log(powerOfThree(3 ** 9)); //true
console.log(powerOfThree(32)); // false
console.log(powerOfThree(1)); //true
console.log(powerOfThree(0)); //false
console.log(powerOfThree(-9)); // true
console.log(powerOfThree((-3) ** 10)); //true
console.log(powerOfThree((-2) ** 31)); //false
*/
