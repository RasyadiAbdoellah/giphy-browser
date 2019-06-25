import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

// import { RouteWithProps } from '../bin'

import { getGifs } from '../redux/actions/gif';
import { getGifsList, getStateGifs } from '../redux/selectors';
import { GifList, MainNav } from '../components';
import { GifDetailsContainer } from '.';

export class Main extends React.Component {
  render() {
    const {
      gifList,
      gifIsGetting,
      gifGetFailed,
      getGifs,
      auth,
    } = this.props;
    return (
      <>
        <div id="main">
          <MainNav id="navbar" getGifs={getGifs} />
          <GifList/>
        </div>
        <Route path="/:id" component={GifDetailsContainer} />
      </>
    );
  }
}

//the state mapped to props.Gifs is actually formatted through selectors.js
//getGifsList returns an array of gif objects
function mapStateToProps(state) {
  const gifList = getGifsList(state);
  const gifIsGetting = getStateGifs(state).isGetting;
  const gifGetFailed = getStateGifs(state).getFailed;

  return { gifList, gifIsGetting, gifGetFailed };
}

//exports the connected component
export default connect(
  mapStateToProps,
  { getGifs },
)(Main);
