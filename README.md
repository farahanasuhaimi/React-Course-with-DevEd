# React Course with DevEd

A React Course with DevEd. This repo is for me to go back to for the tips and maybe next blog post.

## TOC

1. Javascript essentials
2.
3.
4. Components

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

### 4. Components
