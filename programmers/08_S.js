const brown = 24;
const yellow = 24;

function mySolution(brown, yellow) {
  let minRow, minCol;
  for (let i = yellow; i > 0; i--) {
    if (yellow % i === 0) {
      minRow = i;
      let j = 1;
      while (minRow * j !== yellow) {
        j++;
      }
      minCol = j;

      const tile = Math.pow(minRow, 2) + Math.pow(minCol, 2) + 4;
      if (tile === brown) {
        break;
      }
    }
  }
  const answer = [minRow + 2, minCol + 2];
  return answer;
}

function betterSolution(brown, red) {
  var answer = [];
  for (var i = 3; i <= (brown + red) / i; i++) {
    var x = Math.floor((brown + red) / i);
    if ((x - 2) * (i - 2) === red) {
      break;
    }
  }

  return [x, i];
}
