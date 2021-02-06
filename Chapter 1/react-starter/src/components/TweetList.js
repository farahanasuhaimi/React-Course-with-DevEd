import React from 'react';
import Tweet from './Tweet';

const TweetList = ({name, tweets, setTweets}) => {
    return (
        <div className='tweet-list'>
            {/* Map each data in tweets to the Tweet Component. */}
            {tweets.map((tweet) => (
            <Tweet name={name} message={tweet} setTweets={setTweets} />
            ))} 
        </div>
    )
}

export default TweetList;