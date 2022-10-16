const s = 78;

function solution(s) {
  const findNum = convert(s);

  let i = s + 1;
  let foundIt = true;
  while (foundIt) {
    const findNum2 = convert(i);
    if (findNum === findNum2) {
      foundIt = false;
    } else {
      i++;
    }
  }

  function convert(num) {
    const binary = num.toString(2);
    let returnVal = 0;
    for (let i = 0; i < binary.length; i++) {
      if (binary[i] === "1") {
        returnVal++;
      }
    }
    return returnVal;
  }
  return i;
}
