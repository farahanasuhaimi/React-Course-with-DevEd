import React, {useState} from 'react';

const CreateTweet = () => {
    //State
    const [textInput, setTextInput] = useState("")
    const [tweets, setTweets] = useState([])
    // Function 
    const userInputHandler = (e) => {
        setTextInput(e.target.value)
    }
    const submitTweetHandler = (e) => {
        e.preventDefault();
        setTweets([...tweets, textInput])
    }
    return (
        <form onSubmit={submitTweetHandler}>
            <textarea value={textInput} onChange={userInputHandler} cols="50" rows="5"></textarea>
            <button >Submit</button>
        </form>
    )
}

export default CreateTweet;