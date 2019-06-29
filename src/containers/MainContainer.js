import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

// import { RouteWithProps } from '../bin'

import { apiCall, selectGif, getMore, clearGif } from '../redux/actions/gif';
import { getGifsList, getStateGifs, getGifById } from '../redux/selectors';
import { GifList, MainNav, GifDetails } from '../components';

export class Main extends React.Component {
  render() {
    const {
      gifList = [],
      selectedGif,
      selectGif,
      clearGif,
      query = { type: null, term: null },
      gifIsGetting,
      gifIsAppending,
      gifGetFailed,
      gifGetSuccess,
      apiCall
    } = this.props;

    //simplify ui flags
    const gifReqStatus = !gifIsGetting && !gifGetFailed;
    const notRandom = query.type !== 'random';
    const noGifs =
      !gifIsGetting &&
      !gifIsAppending &&
      !gifGetFailed &&
      !gifGetSuccess &&
      (gifList.length === 0 || !selectedGif);
    const showSearchMsg = gifGetSuccess && query.type === 'search';
    const showTrendingMsg = gifGetSuccess && query.type === 'trending';
    const showRandomMsg = gifGetSuccess && selectedGif && query.type === 'random';

    //Create fragments. for organizational purposes only
    const uiMessage = (
      <div
        id='ui-message'
        className={
          'is-flex ' +
          (gifGetFailed ? 'alert ' : '') +
          (gifIsGetting || gifIsAppending ? 'info ' : '')
        }
      >
        <h1>
          {(gifIsGetting || gifIsAppending) && '...Loading'}
          {gifGetFailed &&
            "Uh-oh! Something went wrong! This is usually a problem with Giphy's response. Try refreshing"}
          {showTrendingMsg && 'TRENDING GIFS'}
          {showSearchMsg && `SEARCH RESULTS FOR ${query.term.toUpperCase()}`}
          {showRandomMsg && 'RANDOM GIF'}
          {noGifs && 'Search for GIFS, Checkout trending GIFS, or get a random GIF'}
        </h1>
      </div>
    );

    const gifListFragment = gifReqStatus && notRandom && (
      <GifList gifs={gifList} select={selectGif} selectedId={selectedGif && selectedGif.id} />
    );
    const getMoreButton = (!gifList || gifList.length !== 0) && notRandom && (
      <button onClick={() => this.props.getMore()}>Load More</button>
    );
    return (
      <>
        <MainNav id='navbar' apiCall={apiCall} />
        {uiMessage}
        <div className='is-flex'>
          {query.type !== 'random' && (
            <div id='main'>
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
  const gifIsAppending = getStateGifs(state).isAppending;
  const gifGetFailed = getStateGifs(state).getFailed;
  const gifGetSuccess = getStateGifs(state).getSuccess;
  const selectedGif =
    getStateGifs(state).selectedId && getGifById(state, getStateGifs(state).selectedId);
  const query = { type: getStateGifs(state).queryType, term: getStateGifs(state).queryStr };

  return { gifList, gifIsGetting, gifIsAppending, gifGetFailed, selectedGif, gifGetSuccess, query };
}

//exports the connected component
export default connect(
  mapStateToProps,
  { apiCall, getMore, selectGif, clearGif }
)(Main);
