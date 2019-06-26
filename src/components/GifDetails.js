import React from 'react';
import { Redirect } from 'react-router-dom';

//need propTypes for this one

export default function GifDetails(props) {
  const { gif } = props;
  if (gif) {
    return (
      <>
        <h1>{gif.name}</h1>
        <h2>Details</h2>
        <ul className='gif-details'>
          {gif.Ingredients &&
            gif.Ingredients.map(ingredient => (
              <li className='detail-content' key={ingredient.name}>
                <span>
                  {ingredient.val} {ingredient.scale} {ingredient.name}
                </span>
              </li>
            ))}
        </ul>
      </>
    );
  } else {
    return <div>Could not load GIF... Try refreshing</div>;
  }
}
