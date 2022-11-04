const calculateBtn = document.getElementById("calculate-button");

calculateBtn.addEventListener("click", () => {
  const genderEl = document.getElementById("gender");
  const ageEl = document.getElementById("age");
  const heightEl = document.getElementById("height");
  const weightEl = document.getElementById("weight");
  const unitSystemEl = document.querySelectorAll(".unit-system");

  // BMI Calculator
  const calculateBMI = (height, width) => width / (height / 100) ** 2;
  const BMI = calculateBMI(178, 86).toFixed(2);
  // TODO: Change according to the real data
  console.log(`BMI: ${BMI}`);
});
