var fact = require("./factorial");

console.log(fact.factorial(-1) === undefined);
console.log(fact.factorial(0) === 1);
console.log(fact.factorial(1) === 1);
console.log(fact.factorial(8) === 40320);
console.log(fact.factorial(18) === 6402373705728000);
console.log(fact.factorial(45) === 119622220865480194561963161495657715064383733760000000000);
console.log(fact.factorial(65) === 
18247650592082470666723170306785496252186258551345437492922123134388955774976000000000000000);
// Test how high of a number your program can calculate. Can you push it further?
