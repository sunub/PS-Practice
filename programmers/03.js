function solution(s) {
  let countZero = 0;
  let count = 0;

  while (s.length > 1) {
    s = removeZero(s);
    count++;
  }

  function removeZero(num) {
    const a = num
      .split("")
      .filter((val) => {
        if (val === "0") {
          countZero++;
        }
        return val !== "0";
      })
      .join("");
    return a.length.toString(2);
  }

  const answer = [count, countZero];
  return answer;
}
