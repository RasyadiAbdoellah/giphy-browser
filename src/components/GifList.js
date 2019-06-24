import React from 'react';
import { Link } from 'react-router-dom';

function GifCard(props) {
  const { gif, match } = props;
  return (
    <Link to={`${match.url}/${gif.id}`} className="gif-card">
      <h1>{gif.name}</h1>
    </Link>
  );
}

export default function GifList(props) {
  return (
    <div className="gif-collection">
      {props.gifs && props.gifs.map(gif => (
        <GifCard key={gif.id} gif={gif} {...props} />
      ))}
    </div>
  );
}
