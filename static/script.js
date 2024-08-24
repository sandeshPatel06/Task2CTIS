
document.getElementById('bmi-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters

  if (isNaN(weight) || isNaN(height) || height <= 0) {
    document.getElementById('error').textContent = 'Please enter valid weight and height.';
    document.getElementById('error').style.display = 'block';
    return;
  }

  const bmi = weight / (height * height);
  let category = '';

  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = 'Normal weight';
  } else if (bmi >= 25 && bmi < 29.9) {
    category = 'Overweight';
  } else {
    category = 'Obesity';
  }

  document.getElementById('bmi-value').textContent = bmi.toFixed(2);
  document.getElementById('bmi-category').textContent = category;
  document.getElementById('result').style.display = 'block';
  document.getElementById('error').style.display = 'none';
});

document.querySelector('button[type="reset"]').addEventListener('click', function () {
  document.getElementById('result').style.display = 'none';
  document.getElementById('error').style.display = 'none';
});
