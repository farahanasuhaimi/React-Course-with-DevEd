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

// Mapping 

const users = [
    { name: 'Ed', age: 25 },
    { name: 'Led', age: 100 },
    { name: 'Zed', age: 20 },
];

const mappedUser = users.map((user) => user)
console.log(mappedUser); // return users array without spreading

const userAgeOnly = users.map((user) => user.age)
console.log(userAgeOnly); // return the default age array

const modifiedUserAge = users.map((user) => user.age = 9)
console.log(modifiedUserAge); // return age of the users changed

// Filtering

const filterUser = users.filter((user) => user.age === 20)
console.log(filterUser); // return none as the user array has changed.

// Reducing

const sumUserAge = users.reduce((user) => )

// Example of component

function Tweet() {
    return (
        <div>
            <h2>Tweet</h2>
            <p>This is a tweet from a component.</p>
        </div>
    )
}