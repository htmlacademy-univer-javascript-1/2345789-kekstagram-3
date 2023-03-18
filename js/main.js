function randomNumberFromInterval(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}


const isStringFitInLength = (string, maxLength) => string.length <= maxLength;

console.log(randomNumberFromInterval(1.2, 1.3));
