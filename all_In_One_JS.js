const name = "Shubham";
let age = 25;
var totalMarks = 899;

// name = "Aditi";
age = 28;
totalMarks = 900;

// we can use table to display values in table format when have multiple values

/* ====
   NOTE: Prefer not to use var as it cause issue in block and functional scope
   ====
*/

console.table({ name, age, totalMarks });
