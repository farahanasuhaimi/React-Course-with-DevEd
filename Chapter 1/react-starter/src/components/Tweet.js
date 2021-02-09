import React from 'react';

const Tweet = ({name, tweet, tweets, setTweets}) => {
    const deleteTweet = () => {
        setTweets(tweets.filter((state) => state.id !== tweet.id))
    }
    return (
        <div className='Tweet'>
            <h2>Name: {name}</h2>
            <h3>Tweet: {tweet.message}</h3>
            <button onClick={deleteTweet} >Delete</button>
            <button>Like</button>
        </div>
    )
}

export default Tweet;