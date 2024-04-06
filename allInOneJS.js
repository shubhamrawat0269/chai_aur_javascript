/* Variables */

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
