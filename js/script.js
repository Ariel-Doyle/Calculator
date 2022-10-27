//business logic
function add(num1, num2) {
  return num1 + num2;
}

// user interface logic
const num1 = prompt("Enter a number:");
const num2 = prompt("Enter another number:");

window.alert(add(num1, num2));

