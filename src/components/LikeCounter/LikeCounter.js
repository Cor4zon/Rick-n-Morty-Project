import React from 'react';
import './LikeCounter.css';

const LikeCounter = ({ counter }) => {
    return (
        <div className='likeCounter'>
          <span>
            ♡
          </span>
          <p>{ counter }</p>
        </div>
    );
};

export default LikeCounter;