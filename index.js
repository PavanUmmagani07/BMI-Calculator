#Udemy Solution
function bmiCalculator(weight, height){
    var bmi = weight/Math.pow(height,2);
    return Math.round(bmi);
}

#Replit Version
function bmiCalculator(weight, height) {
  var bmi = weight / (height * height);
  return Math.round(bmi);
}
console.log(bmiCalculator(99, 1.8));



#Udemy Solution
function bmiCalculator(weight, height) {
  var bmi = weight / Math.pow(height, 2);
  bmi = Math.round(bmi);
  if (bmi < 18.5) {
    return("Your BMI is " + bmi + ", so you are underweight.");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return("Your BMI is " + bmi + ", so you have a normal weight.");
  } else {
    return("Your BMI is " + bmi + ", so you are overweight.");
  }
}

bmiCalculator(weight, height);

#Replit Version
function bmiCalculator(weight, height) {
  var bmi = weight / Math.pow(height, 2);
  bmi = Math.round(bmi);
  if (bmi < 18.5) {
    console.log("Your BMI is " + bmi + ", so you are underweight.");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Your BMI is " + bmi + ", so you have a  Normal weight.");
  } else {
    console.log("Your BMI is " + bmi + ", so you are overweight.");
  }
}

bmiCalculator(99, 1.8);

