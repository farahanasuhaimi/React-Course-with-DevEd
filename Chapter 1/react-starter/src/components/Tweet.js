import React, {useEffect} from 'react';
import styled from 'styled-components'

const Tweet = ({name, tweet, tweets, setTweets}) => {
    const deleteTweet = () => {
        setTweets(tweets.filter((state) => state.id !== tweet.id))
    }

        useEffect(() => {
      
      console.log("Hey You");
    }, [])
    return (
        <TweetStyled className='Tweet'>
            <h2>Name: {name}</h2>
            <h3>Tweet: {tweet.message}</h3>
            <button onClick={deleteTweet} >Delete</button>
            <button>Like</button>
        </TweetStyled>
    )
}

const TweetStyled = styled.div`
background-color: red;
border-radius: 3px;
`
export default Tweet;