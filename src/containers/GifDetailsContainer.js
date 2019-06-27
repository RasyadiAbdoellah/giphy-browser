import React from 'react';
import { connect } from 'react-redux';
import { GifDetails } from '../components';

import { getGifById, getStateGifs } from '../redux/selectors';

export function Details(props) {
  return <GifDetails gif={props.gif} />;
}

function mapStateToProps(state) {
  const gif = getStateGifs(state).selectedId && getGifById(state, getStateGifs(state).selectedId);
  return { gif };
}

export default connect(
  mapStateToProps,
  {}
)(Details);
