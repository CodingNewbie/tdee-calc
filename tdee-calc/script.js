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

  // BMR Calculator
  const calculateBMR = (gender, weight, height, age) => {
    if (gender === "male") {
      return Math.round(66.5 + 13.75 * weight + 5.003 * height - 6.755 * age);
    } else if (gender === "female") {
      return Math.round(655.1 + 9.563 * weight + 1.85 * height - 4.676 * age);
    }
  };
  // TODO: Change according to the real data
  console.log(`BMR: ${calculateBMR("male", 86, 178, 26)}`);
});
