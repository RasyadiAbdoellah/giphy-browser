import React from 'react';
import { Redirect } from 'react-router-dom';

export default function GifDetails(props) {
  const {gif, id } = props
  if(gif && (gif.id === +id)){
      return (
      <>
        <h1>{gif.name}</h1>
        <h2>Ingredients</h2>
        <ul className='ingredients'>
            {gif.Ingredients && gif.Ingredients.map(ingredient => (
                <li className='ingredient-entry' key={ingredient.name}>
                    <span>{ingredient.val} {ingredient.scale} {ingredient.name}</span>
                </li>
            ))}
        </ul>
        <h2>Instructions</h2>
        <div></div>
      </>
    )
  } else {
    return <Redirect to='/' />
  }
}