import React from 'react';
import PropTypes from 'prop-types';

//need propTypes for this one

function GifDetails(props) {
  const { gif } = props;
  if (gif) {
    return (
      <>
        <button onClick={() => props.clearGif(gif.id)}> X </button>
        <video loop muted autoPlay controls playsInline key={gif.id}>
          <source src={gif.images.original.mp4} />
        </video>
        <h2>Details</h2>
        {gif.title && <h3>Title: {gif.title}</h3>}
        <ul className='gif-details'>
          <li>URL: {gif.urls.embedUrl || gif.urls.url}</li>
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
