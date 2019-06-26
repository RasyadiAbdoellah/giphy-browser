import React from 'react';

function GifCard(props) {
  const { gif, selectGif } = props;

  return (
    <div className='gif-entry' onClick={() => selectGif(gif.id)}>
      <img src={gif.images.fixHeightSmall.url} />
    </div>
  );
}

export default class GifList extends React.Component {
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
