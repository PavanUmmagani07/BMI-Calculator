function bmiCalculator(weight, height) {
  var bmi = weight / (height * height);
  return Math.round(bmi);
}
console.log(bmiCalculator(99, 1.8));
