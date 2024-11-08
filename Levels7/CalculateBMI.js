// if bmi <= 18.5 return "Underweight
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"


function bmi(weight, height) {
  const total = weight / (height * height);
  return total <= 18.5
    ? "Underweight"
    : total <= 25.0
    ? "Normal"
    : total <= 30.0
    ? "Overweight"
    : "Obese";
}

console.log(bmi(100, 1.8));

