function mySolution(N, A, B) {
  const array = new Array(N).fill(0).map((v, i) => {
    if (i === A - 1 || i === B - 1) {
      return 1;
    } else {
      return 0;
    }
  });

  let foundIt = false;
  let answer = 1;
  for (let i = 0; i < N / 2; i++) {
    const length = array.length;
    let half = array.length / 2;
    for (let j = 0; j < half; j++) {
      if (array[2 * j] === 1 && array[2 * j + 1] === 1) {
        foundIt = true;
        break;
      } else if (array[2 * j] === 1 || array[2 * j + 1] === 1) {
        array.push(1);
      } else {
        array.push(0);
      }
    }

    if (foundIt) {
      break;
    } else {
      answer++;
    }
    array.splice(0, length);
  }
}

function bestSolution(n, a, b) {
  let answer = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}
