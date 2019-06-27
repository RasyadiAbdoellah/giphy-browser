import React from 'react';
import PropTypes from 'prop-types';

function GifEntry(props) {
  const { gif, select } = props;
  const {
    images: { fixHeightSmall }
  } = gif;

  //video has style prop so it can use dimension values in gif image data
  return (
    <div className='gif-entry' onClick={() => select(gif.id)}>
      <video
        autoPlay
        loop
        muted={true}
        playsInline
        style={{
          height: `${fixHeightSmall.height}px`,
          width: `${fixHeightSmall.width}px`
        }}
      >
        <source src={fixHeightSmall.mp4} type='video/mp4' />
        <img src={fixHeightSmall.url} />
      </video>
    </div>
  );
}

class GifList extends React.Component {
  render() {
    const { gifs } = this.props;
    return (
      <div className='gif-collection'>
        {gifs.map(gif => {
          return <GifEntry key={gif.id} gif={gif} {...this.props} />;
        })}
      </div>
    );
  }
}

const gifPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  images: PropTypes.shape({
    fixHeightSmall: PropTypes.shape({
      mp4: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  })
});

GifList.propTypes = {
  gifs: PropTypes.arrayOf(gifPropType).isRequired,
  select: PropTypes.func.isRequired
};

export default GifList;
