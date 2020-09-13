function birthdayCakeCandles(candles) {
let tallest = Math.max(...candles);

return (candles.filter(num => num === tallest ).length);

}
