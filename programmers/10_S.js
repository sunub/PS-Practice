function mySolution(n, words) {
  const array = Array.from(Array(n), () => new Array());
  const visited = new Set();
  const answer = [];
  array[0].push(words[0]);
  visited.add(words[0]);
  let j = 1;
  let foundIt = true;
  for (let i = 1; i < words.length; i++) {
    const backwardWord = words[i - 1];
    const currentWord = words[i];
    const match = matchWord(backwardWord, currentWord);
    if (match) {
      if (!visited.has(words[i])) {
        visited.add(words[i]);
        array[j].push(words[i]);
      } else {
        foundIt = false;
        array[j].push(words[i]);
        answer.push(j + 1);
        answer.push(array[j].length);
        break;
      }
      if (j === n - 1) {
        j = 0;
      } else {
        j++;
      }
    } else {
      foundIt = false;
      array[j].push(words[i]);
      answer.push(j + 1);
      answer.push(array[j].length);
      break;
    }
  }
  if (foundIt) {
    return [0, 0];
  }
  return answer;
}

function matchWord(word1, word2) {
  if (word1[word1.length - 1] === word2[0]) {
    return true;
  } else {
    return false;
  }
}

PRINT(solution(n, words));

const b = [
  ["tank", "kick", "know"],
  ["wheel", "land", "dream"],
];

function bestSolution(n, words) {
  let answer = 0;
  words.reduce((prev, now, idx) => {
    answer = answer || (words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0] ? idx : answer);
    return now[now.length - 1];
  }, "");

  return answer ? [(answer % n) + 1, Math.floor(answer / n) + 1] : [0, 0];
}
