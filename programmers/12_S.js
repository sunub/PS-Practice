const people = [70, 80, 50];
const limit = 100;
const r = 3;

function mySolution(people, limit) {
  people.sort((a, b) => b - a);
  let answer = 0;

  if (people.length === 2) {
    if (people[0] + people[1] <= limit) {
      return 1;
    } else {
      return 2;
    }
  }

  let i = 0;
  let j = people.length - 1;
  while (i <= j) {
    const sum = people[i] + people[j];
    if (sum <= limit) {
      i++;
      j--;
      answer++;
      continue;
    } else {
      i++;
      answer++;
      continue;
    }
  }
  return answer;
}

function bestSolution(people, limit) {
  people.sort(function (a, b) {
    return a - b;
  });
  for (var i = 0, j = people.length - 1; i < j; j--) {
    if (people[i] + people[j] <= limit) i++;
  }
  return people.length - i;
}
