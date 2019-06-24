import React from 'react';
import { NavLink } from 'react-router-dom';

export default function(props) {
  //Main Navigation should render a search bar and filter options.
  return (
    <nav id={props.id}>
      Search with filters, Random, Trending
    </nav>
  );
}
