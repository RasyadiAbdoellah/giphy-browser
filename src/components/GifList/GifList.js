import React from 'react';
import PropTypes from 'prop-types';

function GifEntry(props) {
  const { gif, select, active } = props;
  const {
    images: { fixWidthSmall, fixWidthSmallStill }
  } = gif;

  //video has style prop so it can use dimension values in gif image data
  return (
    <div className={`gif-entry ${active ? 'active' : ''}`} onClick={() => select(gif.id)}>
      <picture
        style={{
          height: `${fixWidthSmall.height}px`,
          width: `${fixWidthSmall.width}px`
        }}
      >
        <source srcSet={fixWidthSmall.webp} media='(min-width: 600px)' />
        <source srcSet={fixWidthSmall.url} media='(min-width: 600px)' />
        <img src={fixWidthSmallStill.url} alt={gif.title} />
      </picture>
    </div>
  );
}

class GifList extends React.Component {
  render() {
    const { gifs, selectedId } = this.props;
    return (
      <div className='gif-collection'>
        {gifs.map(gif => {
          const active = selectedId === gif.id;
          return <GifEntry key={gif.id} gif={gif} active={active} {...this.props} />;
        })}
      </div>
    );
  }
}

const gifPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  images: PropTypes.shape({
    fixWidthSmall: PropTypes.shape({
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
