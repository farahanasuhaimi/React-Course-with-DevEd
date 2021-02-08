import React from 'react';

const Tweet = ({name, message, setTweets}) => {
    const deleteTweet = () => {
        console.log('Hey');
    }
    return (
        <div className='Tweet'>
            <h2>Name: {name}</h2>
            <h3>Tweet: {message}</h3>
            <button onClick={deleteTweet} >Delete</button>
            <button>Like</button>
        </div>
    )
}

export default Tweet;