import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

// import { RouteWithProps } from '../bin'

import { apiCall, selectGif, getMore, getRandom, clearGif } from '../redux/actions/gif';
import { getGifsList, getStateGifs, getGifById } from '../redux/selectors';
import { GifList, MainNav, GifDetails } from '../components';
import { GifDetailsContainer } from '.';

export class Main extends React.Component {
  render() {
    const {
      gifList,
      selectedGif,
      selectGif,
      clearGif,
      queryType,
      gifIsGetting,
      gifGetFailed,
      apiCall,
      getRandom
    } = this.props;

    //Create fragments. This is to make things more readable
    const gifReqStatus = !gifIsGetting && !gifGetFailed;
    const notRandom = queryType !== 'random';
    const gifListFragment = gifReqStatus && notRandom && (
      <GifList gifs={gifList} select={selectGif} />
    );
    const getMoreButton = (!gifList || gifList.length !== 0) && notRandom && (
      <button onClick={() => this.props.getMore()}>Load More</button>
    );
    return (
      <>
        <MainNav id='navbar' apiCall={apiCall} getRandom={getRandom} />
        <div className='flex-container'>
          {queryType !== 'random' && (
            <div id='main'>
              {
                //UI message based on isGetting, gifGetFailed values
              }
              {gifListFragment}
              {getMoreButton}
            </div>
          )}
          {selectedGif && (
            <div id='detail'>
              <GifDetails gif={selectedGif} clearGif={clearGif} />
            </div>
          )}
        </div>
      </>
    );
  }
}

//populate props that will be passed down to components
function mapStateToProps(state) {
  //all fns below are imported from  redux/selectors
  const gifList = getGifsList(state);
  const gifIsGetting = getStateGifs(state).isGetting;
  const gifGetFailed = getStateGifs(state).getFailed;
  const selectedGif =
    getStateGifs(state).selectedId && getGifById(state, getStateGifs(state).selectedId);
  const queryType = getStateGifs(state).queryType;

  return { gifList, gifIsGetting, gifGetFailed, selectedGif, queryType };
}

//exports the connected component
export default connect(
  mapStateToProps,
  { apiCall, getMore, selectGif, getRandom, clearGif }
)(Main);
