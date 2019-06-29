import React from 'react';
import PropTypes from 'prop-types';

//need propTypes for this one

function GifDetails(props) {
  const { gif } = props;
  if (gif) {
    return (
      <>
        <div className='heading'>
          <button className='button' onClick={() => props.clearGif(gif.id)}>
            Close
          </button>
          <h2>{gif.title !== '' ? gif.title : 'Untitled GIF'}</h2>
        </div>
        <video loop muted autoPlay controls playsInline key={gif.id}>
          <source src={gif.images.original.mp4} />
        </video>
        <div className='body'>
          <h2>Details</h2>

          <h3>URLs</h3>
          <table className='table'>
            <tbody>
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
            </tbody>
          </table>
        </div>
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
