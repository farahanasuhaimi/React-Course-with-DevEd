# React Course with DevEd

A React Course with DevEd. This repo is for me to go back to for the tips and maybe next blog post.

## TOC

- [1. Javascript essentials](#1-javascript-essentials)
- [2. Deconstruction](#2-deconstruction)
- [3. Map, Filter and Reduce](#3-map,-filter-and-reduce)
- [4. Components](#4-components)
- [React Rule-of-thumbs](#react-rule-of-thumbs)
- [Why React](#why-react)
- [React Playground](#react-playground)
- [Tips](#tips)

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
  const filterUser = users.filter((user) => user.age === 20));
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

1. Use `className` for `class` in REact JSX.
2. As we are using webpack, we can create component in different files.
3. Name component file with Pascal Case, i.e. `TestComponent.js` and have it the same name as filename.

### Why React

1. It is a dynamic javascript in which it react to every changes on the page without refreshing (i.e. get new set of data) to make/show the changes.
2. we can split each function to be each component
3. we can make one big component such as Blog and fill up all the components needed inside it and call Blog once.

### React Playground

#### 1. State :

- React re-render the UI each time state changes.
- Act a little like variable that hold new data.

  ```javascript
  import React, { useState } from "react";

  function App() {
    // Setting the state from "Stranger"
    const [name, setName] = useState("Stranger");

    // Create the function to change the state to "New User"
    const sayHelloHandler = (e) => {
      setName = "New User";
    };
    return (
      <div>
        <h1>Hello {name}</h1>
        <button onClick={sayHelloHandler}>Click</button>
      </div>
    );
  }
  ```

- It is only reflected on the screen, but not the data itself.
- to update the data, set the `value` to the first state.

  ```javascript
  const CreateTweet = () => {
    //State
    const [textInput, setTextInput] = useState("");
    // Function
    const userInputHandler = (e) => {
      setTextInput(e.target.value);
    };
    return (
      <form>
        <textarea
          value={textInput}
          onChange={userInputHandler}
          cols="50"
          rows="5"
        ></textarea>
        <button>Submit</button>
        <h1 onClick={() => setTextInput("")}>{textInput}</h1>
      </form>
    );
  };
  ```

- To avoid refreshing
- Similar to props, can only be passed down.
- But it can be lifted up (brought up to the parent component) and share to the child component.

#### 2. Props:

- Can be passed down but cannot be passed back to parent and sibling components.
- However, when invoking the function with parantheses (i.e. with input), always use the arrow function declaration.

  ```javascript
  // From Parent Component
  import React, { useState } from "react";

  function App() {
    const [name, setName] = useState("Stranger");
    const message = "Hello";
    return (
      <div>
        <CreateTweet />
        <TweetList name={name} message={message} /> // Props to be passed down
      </div>
    );
  }

  // To the child component
  import Tweet from "./Tweet";

  const TweetList = ({ name, message, setName }) => {
    return (
      <div className="tweet-list">
        <Tweet name={name} message={message} />
        <button onClick={() => setName("John")}>Click</button> // Setting the arrow
        function
      </div>
    );
  };
  ```

#### 3. useEffect

- To give effect on the screen.

  ```javascript
  useEffect(() => {
    effect;
    return () => {
      cleanup;
    };
  }, [input]);
  ```

- And for default empty `input` with `[]`, the app or component will be rendered once it is executed.
  ```javascript
  useEffect(() => {
    console.log("This taken effect immediately");
  }, []);
  ```
- Use case scenarios:
  - Send request
  - Get database
  - Preview something

### Tips

1. Prevent Page Refreshing

- React is dynamic where it dynamically update each changes without getting new data.
- For instance, to avoid refreshing in "form submission operation", we can prevent the default by:
  ```javascript
  const submitTweetHandler = (e) => {
    e.preventDefault(); // Prevent default refreshing but act like it has been refreshed.
    console.log("Hey");
  };
  return (
    <form onSubmit={submitTweetHandler}>
      <textarea
        value={textInput}
        onChange={userInputHandler}
        cols="50"
        rows="5"
      ></textarea>
      <button>Submit</button>
    </form>
  );
  ```

2. Use Spreading to append data in an array

- With spreading, the in-used variable/array will not change.
- The new variable (an array) will have the in-used variable with appends of new data.

  ```javascript
  const CreateTweet = () => {
    //State
    const [textInput, setTextInput] = useState("");
    const [tweets, setTweets] = useState([]);
    // Function
    const userInputHandler = (e) => {
      setTextInput(e.target.value);
    };
    const submitTweetHandler = (e) => {
      e.preventDefault();
      setTweets([...tweets, textInput]); // The used of spreading
      // setTweets (new array) will have tweets (in-used variable/array) with textInput (new data) appended.
    };
    return (
      <form onSubmit={submitTweetHandler}>
        <textarea
          value={textInput}
          onChange={userInputHandler}
          cols="50"
          rows="5"
        ></textarea>
        <button>Submit</button>
      </form>
    );
  };
  ```

3. State/Props Lifting

- To access a prop or state, one must have it in the parent components.
- The trick is, to lift up the prop or state to each parent components, so that both child components could access it.
- In the codes above, `createTweet` and `Tweet` are both sibling with `App` as parent. Thus, by lifting the props and states to their parents, both can be passed down.
