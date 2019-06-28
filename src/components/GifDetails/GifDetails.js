import React from 'react';
import PropTypes from 'prop-types';

//need propTypes for this one

function GifDetails(props) {
  const { gif } = props;
  if (gif) {
    return (
      <>
        <video loop muted autoPlay controls playsInline>
          <source src={gif.images.original.mp4} />
        </video>
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
