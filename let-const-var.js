// ============= HOISTING Examples below =============
console.log("=== HOISTING DEMO ===");

console.log(varVariable); // undefined (declaration hoisted, init NOT hoisted)
// console.log(letVariable); // ReferenceError: Cannot access 'letVariable' before initialization (TDZ)
// console.log(constVariable); // ReferenceError: Cannot access 'constVariable' before initialization (TDZ)


var varVariable = "I am var";
let letVariable = "I am let";
const constVariable = "I am const";


// function declaration hoisting (entire function is hoisted)
sayHello(); // -> "Hello from a hoisted function!"
function sayHello() {
    console.log("Hello from a hoisted function!");
}








// ============= SCOPE Examples below =============
console.log("\n=== SCOPE DEMO ===");

// var is function-scoped (leaks outside blocks)
function testVarScope() {
    var favoriteFood = "Pizza";
    if (true) {
        var favoriteFood = "Pasta"; // This is the SAME variable
        console.log("Inside `if` block:", favoriteFood); // Output: Pasta
    }
    console.log("Outside `if` block:", favoriteFood); // Output: Pasta
}
testVarScope();


// `let` is block-scoped
function testLetScope() {
    let favoriteColor = "Blue";
    if (true) {
        let favoriteColor = "Green"; // This is a DIFFERENT variable
        console.log("Inside `if` block:", favoriteColor); // Output: Green
    }
    console.log("Outside `if` block:", favoriteColor); // Output: Blue
}
testLetScope();


// `const` is also block-scoped
function testConstScope() {
    const birthYear = 1997;
    if (true) {
        const birthYear = 2000; // This is a DIFFERENT variable
        console.log("Inside `if` block:", birthYear); // Output: 2000
    }
    console.log("Outside `if` block:", birthYear); // Output: 1997
}
testConstScope();


// shortcut for scope demonstration
if (true) {
    var functionScoped = "I'm accessible outside";
    let blockScopedLet = "I'm confined to this block";
    const blockScopedConst = "I'm confined to this block too!";
}

console.log(functionScoped); // I'm accessible outside  // var is leaks outside blocks (function-scoped)
// console.log(blockScopedLet); // ReferenceError
// console.log(blockScopedConst); // ReferenceError








// ============= Reassignment Examples below =============
console.log("\n=== REASSIGNMENT DEMO ===");

// varVariable, letVariable, constVariable was declared above once
// Now reassigning them:
varVariable = "var can be reassigned";
letVariable = "let can be reassigned";
// constVariable = "const cannot be reassigned"; // TypeError!

console.log(varVariable);
console.log(letVariable);
console.log(constVariable);

// Extra example for var redeclaration  // let and const cannot be redeclared in the same scope
var varVariable = "var can be redeclared also!";
console.log(varVariable); // No error, prints: var can be redeclared also!








// ============= CONST WITH OBJECTS/ARRAYS =============
console.log("\n=== CONST WITH MUTABLE DATA ===");

const person = { name: "Bob" };
person.name = "David"; // ✅ Allowed - modifying property
person.age = 25; // ✅ Allowed - adding property
// person = { name: "Charlie" }; // ❌ Not allowed - reassignment

console.log(person); // { name: "David", age: 25 }


// CONST with Arrays Examples below

const numbers = [1, 2, 3];
numbers.push(4); // ✅ Allowed - modifying array
numbers[0] = 10; // ✅ Allowed - modifying array
// numbers = [5, 6, 7]; // ❌ Not allowed - reassignment

console.log(numbers); // [10, 2, 3, 4]


