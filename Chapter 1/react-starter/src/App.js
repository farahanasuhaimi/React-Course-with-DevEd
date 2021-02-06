import React, {useState} from "react";
import TweetList from "./components/TweetList"
import CreateTweet from "./components/CreateTweet"

function App() {
const [name, setName] = useState('Farahana')
const message = "Hi there."
const sayHelloHandler = (e) => {
  setName('Farahana Suhaimi') 
}
return (
  <div>
    <h1>Tweeter Here</h1>
      <CreateTweet/>
      <TweetList setName={setName} name={name} message={message}/>

  </div>
  )
}

export default App;
