const mealPrice = 35.45
const tip10 = mealPrice / 100 * 10
const totalBeforeTip = mealPrice - tip10;
const totalAfterTip = totalBeforeTip + tip10;

const string = `Your bill is £${totalBeforeTip.toFixed(2)}, a tip of 10%: £${tip10.toFixed(2)} would bring your total up to £${totalAfterTip}`

console.log(string)