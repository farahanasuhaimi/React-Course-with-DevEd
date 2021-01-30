# React Course with DevEd

A React Course with DevEd. This repo is for me to go back to for the tips and maybe next blog post.

## TOC

- [1. Javascript essentials](#1-javascript-essentials)
- [2. Deconstruction](#2-deconstruction)
- [3. Map, Filter and Reduce](#3-map,-filter-and-reduce)
- [4. Components](#4-components)
- [React Rule-of-thumbs](react-rule-of-thumbs)
- [ Why React](why-react)
### 1. Javascript essentials

- Uses `const` and `let`
- A `const` array can be manipulated but can not be modified directly
- Copying an array to a new array will invoke changes to the old array once new array modified

```javascript
const initialUsers = ["john", "Ed", "Becky"];

const currentUsers = initialUsers;
currentUsers.push("New Guy");

console.log(initialUsers); // [ 'john', 'Ed', 'Becky', 'New Guy' ]
console.log(currentUsers); // [ 'john', 'Ed', 'Becky', 'New Guy' ]
```

- Rather doing the above, you can try to spread it.

```javascript
const currentUsers = [...initialUsers];
currentUsers.push("New Guy");

console.log(initialUsers); // [ 'john', 'Ed', 'Becky' ]
```

- Use the arrow functions rather than the usual one.

```javascript
// Oldie
function sayHey(name) {
  console.log("hey" + name);
}

sayHey("John"); // heyJohn
```

```javascript
// Newie
const sayHey = (name) => {
  console.log(`hey ${name}`);
};

sayHey("John"); // hey John
```

- Use backtick (`) for the string and quote as example above.
- When use with one line return function with one input, it can be simplified as this;

```javascript
const sayHello = (name) => `Hello ${name}`;
const greeting = sayHello(`Johny`);
console.log(greeting); // Hello Johny
```

### 2. Deconstruction

Deconstruction is used to simplify dictionary.

- Instead of using the usual definition;

```javascript
// Oldie
const user = {
  firstName: "Johny",
  lastName: "Doe",
  age: 20,
};
console.log(user.age); // 20

// const { firstName, lastName, age } = user;
// console.log(lastName); // Doe
```

- The script can be simplified as;

```javascript
// Newie
const newUser = ["Johny", "Doe", 20];
const [firstNameUser, surnameUser, ageUser] = newUser;

console.log(firstNameUser); // Johny
```

### 3. Map, Filter and Reduce

- Map can be used to get the array without spreading (`...`).
- Map is suitable to get certain information in the array.

```javascript
const users = [
  { name: "Ed", age: 25 },
  { name: "Led", age: 100 },
  { name: "Zed", age: 20 },
];

const userAgeOnly = users.map((user) => user.age);
console.log(userAgeOnly); // return the default age array
```

- However, when some changes made in the mapped array, it reflects on the former array too.

```javascript
const modifiedUserAge = users.map((user) => (user.age = 9));
console.log(users);
// [
//   { name: 'Ed', age: 9 },
//   { name: 'Led', age: 9 },
//   { name: 'Zed', age: 9 }
// ]
```

- Filter can be used to get certain elements in the array

```javascript
const filterUser = users.filter((user) => user.age === 20);
console.log(filterUser); // return none as the user array has changed.
```

- Reduce is used to transform an array into single object ??

### 4. Components

- A component has:
  1. its own functionality (i.e. button for stop and play),
  2. can be reusable
  3. easy to scale up and
  4. has its own styling.
- A component also can hold other component(s).

### React Rule-of-thumbs

### Why React

1. we can split each function to be each component
2. we can make one big component such as Blog and fill up all the components needed inside it and call Blog once.
