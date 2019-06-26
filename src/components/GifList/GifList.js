import React from 'react';
import { Link } from 'react-router-dom';

function GifCard(props) {
  const { gif, match, params } = props;

  return (
    <Link to={`${match.url}/${gif.id}`} className='gif-entry'>
      <h1>{gif.title}</h1>
    </Link>
  );
}

export default class GifList extends React.Component {
  componentDidMount() {
    const { req, params } = this.props;
    req(params);
  }
  componentDidUpdate(prevProps) {
    const { req, params } = this.props;
    if (params !== prevProps.params) {
      req(params);
    }
  }
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
