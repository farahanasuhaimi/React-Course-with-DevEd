import React, {useState} from "react";
import TweetList from "./components/TweetList"
import CreateTweet from "./components/CreateTweet"

function App() {
const [name, setName] = useState('Farahana')

const sayHelloHandler = (e) => {
  setName('Farahana Suhaimi') 
}
return (
  <div>
    {/* <h1>Tweeter Here</h1>
    <CreateTweet/>
    <TweetList name={name} message={message}/> */}
    <h1>Hello {name}!</h1>
    <button onClick={sayHelloHandler}>Hello</button>
  </div>
  )
}

export default App;
