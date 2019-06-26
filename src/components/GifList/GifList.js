import React from 'react';
import { Link } from 'react-router-dom';

function GifCard(props) {
  const { gif, match } = props;
  return (
    <Link to={`${match.url}/${gif.id}`} className='gif-card'>
      <h1>{gif.title}</h1>
    </Link>
  );
}

export default function GifList(props) {
  return (
    <div className='gif-collection'>
      {props.getFail && (
        <div data-test='fail-message'>
          <h3>Oops! Something went wrong... </h3>
        </div>
      )}
      {!props.getFail &&
        props.gifs.map(gif => {
          return <GifCard key={gif.id} gif={gif} {...props} />;
        })}
    </div>
  );
}
