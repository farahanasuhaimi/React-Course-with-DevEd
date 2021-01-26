# React Course with DevEd

A React Course with DevEd. This repo is for me to go back to for the tips and maybe next blog post.

## TOC

- [1. Javascript essentials](#1-javascript-essentials)

- [4. Components](#4-components)

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

### 4. Components
