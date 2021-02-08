import React from 'react';

const Tweet = ({name, tweet, tweets, setTweets}) => {
    const deleteTweet = () => {
        setTweets(tweets.filter((t) => t !== tweet))
    }
    return (
        <div className='Tweet'>
            <h2>Name: {name}</h2>
            <h3>Tweet: {tweet}</h3>
            <button onClick={deleteTweet} >Delete</button>
            <button>Like</button>
        </div>
    )
}

export default Tweet;