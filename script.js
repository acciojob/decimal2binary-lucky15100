function decimalToBinary(decimalNum) {
  let binaryNum = "";

  if (decimalNum === 0) {
    binaryNum = "0";
  } else {
    while (decimalNum > 0) {
      let remainder = decimalNum % 2;
      binaryNum = remainder + binaryNum;
      decimalNum = Math.floor(decimalNum / 2);
    }
  }

  return binaryNum;
}

// Test cases
const inputNum1 = 7;
const inputNum2 = 10;
const inputNum3 = 33;

console.log("Input:", inputNum1);
console.log("Output:", decimalToBinary(inputNum1));

console.log("Input:", inputNum2);
console.log("Output:", decimalToBinary(inputNum2));

console.log("Input:", inputNum3);
console.log("Output:", decimalToBinary(inputNum3));
