// Array used with spread

const initialUsers = ["john", "Ed", "Becky"]

const currentUsers = [...initialUsers]
currentUsers.push("New Guy")

console.log(initialUsers); // [ 'john', 'Ed', 'Becky', 'New Guy' ]
console.log(currentUsers); // [ 'john', 'Ed', 'Becky', 'New Guy' ]

// Use arrow functions

const sayHello = (name) => {
    console.log(`hey ${name}`);
}

sayHello('John') // hey John
