// mencari rata rata nilai
// flow
// 1. mencari rata rata ketiga nilai
// 2. buat kondisi

function getGrade(s1, s2, s3) {
  let score = (s1 + s2 + s3) / 3;
  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 60 && score < 70) {
    return "D";
  } else if ((score) => 0 && score < 60) {
    return "F";
  }
}

// ternary
function getGrade2(s1, s2, s3) {
  let score = (s1 + s2 + s3) / 3;
  return score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";
}

console.log(getGrade2(44, 55, 52));
console.log(getGrade(44, 55, 52));
