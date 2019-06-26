import React from 'react';
import PropTypes from 'prop-types';

function GifCard(props) {
  const { gif, select } = props;

  return (
    <div className='gif-entry' onClick={() => select(gif.id)}>
      <img src={gif.images.fixHeightSmall.url} />
    </div>
  );
}

class GifList extends React.Component {
  render() {
    const { gifs } = this.props;
    console.log(this.props);
    return (
      <div className='gif-collection'>
        {this.props.getFail && (
          <div data-test='fail-message'>
            <h3>Oops! Something went wrong... </h3>
          </div>
        )}
        {!this.props.getFail &&
          gifs.map(gif => {
            return <GifCard key={gif.id} gif={gif} {...this.props} />;
          })}
      </div>
    );
  }
}

GifList.propTypes = {
  gifs: PropTypes.arrayOf(PropTypes.object).isRequired,
  select: PropTypes.func.isRequired
};

export default GifList;
