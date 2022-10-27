const cacheSize = 5;
const cities = [
  "Jeju",
  "Pangyo",
  "Seoul",
  "NewYork",
  "LA",
  "SanFrancisco",
  "Seoul",
  "Rome",
  "Paris",
  "Jeju",
  "NewYork",
  "Rome",
];
const solution = (cacheSize, cities) => {
  if (cacheSize === 0) {
    return cities.length * 5;
  }
  let time = 0;
  const cache = new Array(cacheSize).fill(null);

  for (let i = 0; i < cities.length; i++) {
    const string = cities[i].toLowerCase();

    if (!cache.includes(string)) {
      cache.unshift(string);
      cache.pop();
      time += 5;
    } else {
      const index = cache.indexOf(string);
      cache.splice(index, 1);
      cache.unshift(string);
      time += 1;
    }
  }

  return time;
};