//business logic
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1 , num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}


// user interface logic
const num1 = parseInt(prompt("Enter a number:"));
const num2 = parseInt(prompt("Enter another number:"));
window.alert("The sum of the addition problem is " + add(num1, num2) + ".");
window.alert(`The remainder of your numbers is ${subtract(num1, num2)}.`);
window.alert(`The product of your numbers is ${multiply(num1, num2)}.`);
window.alert(`The quotient of your numbers is ${divide(num1, num2)}.`);
