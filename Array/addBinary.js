function addBinary(a, b) {
  const num1 = `0b${a}`;
  const num2 = `0b${b}`;

  const sum = BigInt(num1) + BigInt(num2);

  return sum.toString(2);
}
