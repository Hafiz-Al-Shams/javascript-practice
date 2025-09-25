const name = 'David';
const items = ['apple', 'banana', 'cherry'];

// 1) Basic interpolation
// Variables and Expressions inside template literals
const greeting = `Hello, ${name}! You have ${items.length} items.`;

console.log(greeting); // Hello, David! You have 3 items.


// Another example
const a = 5;
const b = 3;
const sumText = `5 + 3 = ${a + b}`;
console.log(sumText); // 5 + 3 = 8







// 2) Multi-line strings (no \n needed)
const list = `
Your shopping list:
1. ${items[0]}
2. ${items[1]}
3. ${items[2]}
`;

console.log(list);
/*
Your shopping list:
1. apple
2. banana
3. cherry
*/


// Another multi-line example
const email = `Hi ${name},
Thanks for joining our workshop!
Regards,
Dev Team`;
/* => preserves line breaks:
Hi David,
Thanks for joining our workshop!
Regards,
Dev Team
*/

console.log(email);



