/* +++++++++++++++ Variables +++++++++++++++ */

const userId = 100091;
let userName = "Shubham Rawat";
var userAge = 29;

/* Note --> It's not preferable to declare and assign value to a variable like below. */
userProfession = "Web Developer";

/* Please Note --> const variables can't be modified */
// userId = 100092;

userName = "Abhishek Rawat";
userAge = 22;
userProfession = "Chemist";

console.table({ userId, userName, userAge, userProfession });

/* +++++++++++++++ Datatypes and ECMA +++++++++++++++ */

// "use strict" // treat all js code to newer version

// alert(3+3); // we are using node js , not browser

console.log(3 + 3); // code readability & future proof of code must be high

// console.log("Shubham");

let name = "Shubham Rawat";
let age = 26;
let isLoogedIn = false;
let state;

// ---------- Primitive type ----------
// number -> 2 ^ 53
// bigint
// string -> ""
// boolean -> t/f
// null -> standalone value
// undefined
// symbol

// ---------- Non-Primitive ( Reference ) type ----------

// object

// console.log(typeof undefined);
// console.log(typeof null);
