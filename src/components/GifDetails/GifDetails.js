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
        <table className='table'>
          <thead className='heading label'>
            <h4>GIF URLs</h4>
          </thead>
          <tr>
            <td className='label'>
              <h5>Giphy URL</h5>
            </td>
            <td>
              <a href={gif.urls.url}>{gif.urls.url}</a>
            </td>
          </tr>
          <tr>
            <td className='label'>
              <h5>Minified URL</h5>
            </td>
            <td>
              <a href={gif.urls.bitlyUrl}>{gif.urls.bitlyUrl}</a>
            </td>
          </tr>
          <tr>
            <td className='label'>
              <h5>Embed URL</h5>
            </td>
            <td>
              <a href={gif.urls.embedUrl}>{gif.urls.embedUrl}</a>
            </td>
          </tr>
        </table>
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
