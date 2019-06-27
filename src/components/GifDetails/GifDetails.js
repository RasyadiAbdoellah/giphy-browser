import React from 'react';
import PropTypes from 'prop-types';

//need propTypes for this one

function GifDetails(props) {
  const { gif } = props;
  if (gif) {
    return (
      <>
        <picture>
          <source srcSet={gif.images.original.webp} />
          <img src={gif.images.original.gif} alt={gif.titile} />
        </picture>
        <h2>Details</h2>
        <h3>{gif.title}</h3>
        <ul className='gif-details'>
          <li>Embed URL: {gif.urls.embedUrl}</li>
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
