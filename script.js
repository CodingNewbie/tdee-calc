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
  console.log(`BMI: ${BMI}`);

  // BMR Calculator
  const calculateBMR = (gender, weight, height, age) => {
    if (gender === "male") {
      return Math.round(66.5 + 13.75 * weight + 5.003 * height - 6.755 * age);
    } else if (gender === "female") {
      return Math.round(655.1 + 9.563 * weight + 1.85 * height - 4.676 * age);
    }
  };
  console.log(`BMR: ${calculateBMR("male", 86, 178, 26)}`);

  // TDEE Calculator
  const calculateTDEE = (BMR, activity) => {
    switch (activity) {
      case "sedentary":
        return BMR * 1.2;
      case "lightlyActive":
        return BMR * 1.375;
      case "moderatelyActive":
        return BMR * 1.55;
      case "veryActive":
        return BMR * 1.725;
      case "extremelyActive":
        return BMR * 1.9;
    }
  };
  console.log(
    `TDEE: ${Math.round(
      calculateTDEE(calculateBMR("male", 86, 178, 26), "lightlyActive")
    )}`
  );
});
