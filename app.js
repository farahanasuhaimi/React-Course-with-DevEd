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

// Deconstruction

// Oldie
const user = {
    firstName: 'Johny',
    lastName: 'Doe',
    age: 20,
}
console.log(user.age); // 20

const { firstName, lastName, age } = user;
console.log(lastName); // Doe

// Newie
const newUser = ['Johny', 'Doe', 20];
const [firstNameUser, surnameUser, ageUser] = newUser;

console.log(firstNameUser); // Johny