// =============================
// Part 1: Variables & Conditionals
// =============================
function checkAge() {
  let age = document.getElementById("ageInput").value;
  let message;

  if (age >= 18) {
    message = "You are an adult!";
  } else if (age > 0) {
    message = "You are under 18.";
  } else {
    message = "Please enter a valid age.";
  }

  document.getElementById("ageResult").innerText = message;
}

// =============================
// Part 2: Functions
// =============================

// Function 1: Add two numbers
function calculateSum() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let sum = addNumbers(num1, num2);

  document.getElementById("sumResult").innerText = "Sum = " + sum;
}

// Function 2: Reusable sum function
function addNumbers(a, b) {
  return a + b;
}

// =============================
// Part 3: Loops
// =============================

// Example 1: Countdown using while loop
function showCountdown() {
  let result = "";
  let i = 5;
  while (i > 0) {
    result += i + " ";
    i--;
  }
  result += "🚀 Lift off!";
  document.getElementById("countdown").innerText = result;
}

// Example 2: Iterating through array with for loop
function listFruits() {
  let fruits = ["Apple", "Banana", "Grapes", "Orange"];
  let list = document.getElementById("fruitList");
  list.innerHTML = ""; // Clear before adding

  for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement("li");
    li.innerText = fruits[i];
    list.appendChild(li);
  }
}

// =============================
// Part 4: DOM Manipulation
// =============================

// Example 1: Toggle a CSS class
document.getElementById("toggleBtn").addEventListener("click", function() {
  document.getElementById("toggleText").classList.toggle("highlight");
});

// Example 2: Add new item dynamically
document.getElementById("addItemBtn").addEventListener("click", function() {
  let list = document.getElementById("dynamicList");
  let li = document.createElement("li");
  li.innerText = "New Item " + (list.children.length + 1);
  list.appendChild(li);
});

// Example 3: Greeting the user
document.getElementById("greetBtn").addEventListener("click", function() {
  let name = document.getElementById("nameInput").value;
  document.getElementById("greetOutput").innerText = "Hello, " + name + " 👋";
});
