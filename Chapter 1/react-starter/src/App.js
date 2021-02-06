import React, {useState} from "react";
import TweetList from "./components/TweetList"
import CreateTweet from "./components/CreateTweet"

function App() {
 //State
    const [textInput, setTextInput] = useState("") // make it empty
    const [tweets, setTweets] = useState([]) // make it empty array
    const [name, setName] = useState('Farahana')
    const message = "Hi there."
    const sayHelloHandler = (e) => {
      setName('Farahana Suhaimi') 
    }
    return (
      <div>
        <h1>Tweeter Here</h1>
          <CreateTweet textInput={textInput} setTextInput={setTextInput} tweets={tweets} setTweets={setTweets} />
          <TweetList name={name} tweets={tweets} setTweets={setTweets}/>

      </div>
      )
}

export default App;
