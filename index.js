// printf();
// cout()
// System.out.println()
// console.writeLine();
// print("", 1, true or false, 0.4, '')

// console.log("Welcome to javascript world");
// console.log("I lkie js");

// window.alert("This is javascipt");
// window.prompt("");

// document.getElementById("myH1").textContent = "Welcome to javascript";

// document.getElementById("myP").textContent = "i like js";

// let firstName = "Ganesh";
// let favNum1 = 10.7;
// let favNum2 = 10;
// let isStudent = true;

// console.log(typeof firstName);
// console.log(typeof favNum1);
// console.log(typeof favNum2);
// console.log(isStudent);
// console.log(typeof isStudent);

// let empCount = 31;

//           31       1 = 32
// empCount = empCount + 1;
// empCount = empCount - 1;
// empCount = empCount * 2;
// empCount = empCount / 2;
// empCount = empCount ** 2;
// empCount = empCount % 2;

// let extraEmployee = empCount  % 3;

// agumeneted assigment operator
// empCount += 1;
// empCount -= 1;
// empCount *= 1;
// empCount /= 1;
// empCount %= 1;
// console.log(empCount);
// console.log(extraEmployee);

// let empCount = 31;

// empCount++;
// empCount--;

// console.log(empCount);

// let result = 1 + 2 * 3 + 4 ** 2;

// let result = 1 + 2 * 3 + 16;

// let result = 1 + 6 + 16;

// let result = 7 + 16;

// let result = 23;

// result = 12 % 5 + 8 / 2;
// let result = 2 + 8 / 2;
// let result = 2 + 4;
// let result = 6;

// let result = 6 / 2 ** (2 * 5);

// console.log(result);

// let username;

// username = window.prompt("what is your username? ");

// console.log(username);

// let username;
// document.getElementById("mySubmit").onclick = function() {
//      username = document.getElementById("myText").value;
//      username = document.getElementById("myH1").textContent = `Welcome ${username}`;
//      console.log(username);
// }

// let username = "siva";

// console.log(`hello ${username}`);

// let age = window.prompt("How old are you");
// age = Number(age);
// age += 1;
// console.log(age);

// console.log(age, typeof age);

// let x = "veg rice";
// let y = "veg rice";
// let z = "veg rice";

// let x = "1ertyuio11";
// let y = "0";
// let z = "0";

// let x = "";
// let y = "";
// let z = "";

// let x;
// let y;
// let z;

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// const PI = 3.14159;
// let radius;
// let circumference;
// PI = 6789.3;
// radius = window.prompt(`Enter the radius of circle`);
// radius = Number(radius);
// circumference = 2 * PI * radius;

// console.log(circumference);

// let x = 3.21;
// let x = 3.99;
// let x = 3;
// let y = 2;
// let z = 1;
// z = Math.round(x);
// z = Math.floor(x); // roubd down
// z = Math.ceil(x); round up
// z = Math.trunc(x);
// z = Math.pow(y, x);
// z = Math.sqrt(x);
// z = Math.abs(x);
// let max = Math.max(x, y, z);
// let min = Math.min(x, y, z);
// console.log(min);

// let isStudent = true;

// if(isStudent) {
//     console.log("You are a student");
// } else {
//      console.log("You are a not student");
// }

// let age = 10;
// let hasLicense = false;

// if(age >= 18) {
//    console.log("You are old enough to drive");

//    if(hasLicense) {
//       console.log("you have your lisence");
//    } else {
//     console.log("you do not have lisense yet");
//    }

// } else {
//      console.log("You must be 18+ to have alisense");
// }

// let age = -1;
// // false
// if(age >= 110) {
//     console.log("you are too old to vote");
//     // false
// } else if(age >= 18) {
//     console.log("you are old enough to vote");
// } else if(age < 0) {
//      console.log("your age cant be 0");
// } else {
//     console.log("you must ve 18+ to vote");
// }

let myCheckbox = document.getElementById("myCheckbox");
let visaBtn = document.getElementById("visaBtn");
let mastercardBtn = document.getElementById("mastercardBtn");
let rupayBtn = document.getElementById("rupayBtn");
let mySubmit = document.getElementById("mySubmit");
let subResult = document.getElementById("subResult");
let paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {

  if (myCheckbox.checked) {
    subResult.textContent = `You are subscribed!!!`;
  } else {
    subResult.textContent = `You are not subscribed!!!`;
  }

  if (visaBtn.checked) {
    paymentResult.textContent = `You selected Visa`;
  }
  else if (mastercardBtn.checked) {
    paymentResult.textContent = `You selected Mastercard`;
  }
  else if (rupayBtn.checked) {
    paymentResult.textContent = `You selected Rupay`;
  }
  else {
    paymentResult.textContent = `Please select a payment method`;
  }
};