import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

// import { RouteWithProps } from '../bin'

import { reqGifSearch, reqGifTrending, selectGif } from '../redux/actions/gif';
import { getGifsList, getStateGifs, getGifById } from '../redux/selectors';
import { GifList, MainNav } from '../components';
import { GifDetailsContainer } from '.';

export class Main extends React.Component {
  render() {
    const {
      gifList,
      gifIsGetting,
      gifGetFailed,
      selectedGif,
      reqGifSearch,
      reqGifTrending,
      selectGif
    } = this.props;
    return (
      <>
        <div id='main'>
          {
            gifIsGetting // display loader when req is loading
          }
          <MainNav id='navbar' search={reqGifSearch} trending={reqGifTrending} />
          <GifList gifs={gifList} select={selectGif} />
        </div>
        {selectedGif && <GifDetailsContainer gif={selectedGif} />}
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
  const selectedGif = getGifById(getStateGifs.selectedId);

  return { gifList, gifIsGetting, gifGetFailed };
}

//exports the connected component
export default connect(
  mapStateToProps,
  { reqGifSearch, reqGifTrending, selectGif }
)(Main);
