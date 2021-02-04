import React from 'react';

const Tweet = ({name, message}) => {
    return (
        <div className='Tweet'>
            <h2>Name: {name}</h2>
            <h3>Tweet: {message}</h3>
            <button>Delete</button>
            <button>Like</button>
        </div>
    )
}

export default Tweet;