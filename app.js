// Array used with spread

const initialUsers = ["john", "Ed", "Becky"]

const currentUsers = [...initialUsers]
currentUsers.push("New Guy")

console.log(initialUsers); // [ 'john', 'Ed', 'Becky', 'New Guy' ]
console.log(currentUsers); // [ 'john', 'Ed', 'Becky', 'New Guy' ]

// Use arrow functions

const sayHey = (name) => {
    console.log(`hey ${name}`);
}

sayHey('John') // hey John

// Simplify the arrow function with 1 input and 1 line output.
const sayHello = name => `Hello ${name}`;
const greeting = sayHello(`Johny`)
console.log(greeting); // Hello Johny