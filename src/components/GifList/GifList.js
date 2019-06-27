import React from 'react';
import PropTypes from 'prop-types';

function GifEntry(props) {
  const { gif, select } = props;
  const {
    images: { fixHeightSmall, fixHeightSmallStill }
  } = gif;

  //video has style prop so it can use dimension values in gif image data
  return (
    <div className='gif-entry' onClick={() => select(gif.id)}>
      <picture
        style={{
          height: `${fixHeightSmall.height}px`,
          width: `${fixHeightSmall.width}px`
        }}
      >
        <source srcSet={fixHeightSmall.webp} media='(min-width: 600px)' />
        <source srcSet={fixHeightSmall.url} media='(min-width: 600px)' />
        <img src={fixHeightSmallStill.url} alt={gif.title} />
      </picture>
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
      webp: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  })
});

GifList.propTypes = {
  gifs: PropTypes.arrayOf(gifPropType).isRequired,
  select: PropTypes.func.isRequired
};

export default GifList;
