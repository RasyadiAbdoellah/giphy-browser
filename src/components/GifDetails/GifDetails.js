import React from 'react';
import PropTypes from 'prop-types';

//need propTypes for this one

function GifDetails(props) {
  const { gif } = props;
  if (gif) {
    return (
      <>
        <h1>{gif.title}</h1>
        <h2>Details</h2>
        <ul className='gif-details'>
          {gif.data &&
            gif.data.map(ingredient => (
              <li className='detail-content' key={ingredient.name}>
                <span>
                  {ingredient.val} {ingredient.scale} {ingredient.name}
                </span>
              </li>
            ))}
        </ul>
      </>
    );
  } else {
    return <div>Could not load GIF... Try refreshing</div>;
  }
}

GifDetails.propTypes = {
  gif: PropTypes.object
};

export default GifDetails;
