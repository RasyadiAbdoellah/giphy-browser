import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

// import { RouteWithProps } from '../bin'

import { reqGifSearch, reqGifTrending, selectGif, getMore } from '../redux/actions/gif';
import { getGifsList, getStateGifs, getGifById } from '../redux/selectors';
import { GifList, MainNav, GifDetails } from '../components';
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
        <MainNav id='navbar' search={reqGifSearch} trending={reqGifTrending} />
        <div className='flex-container'>
          <div id='main'>
            {
              //UI message based on isGetting, gifGetFailed values
            }
            {!gifIsGetting && !gifGetFailed && <GifList gifs={gifList} select={selectGif} />}
            {(!gifList || gifList.length !== 0) && (
              <button onClick={() => this.props.getMore()}>Get More</button>
            )}
          </div>
          {selectedGif && (
            <div id='detail'>
              <GifDetails gif={selectedGif} />
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

  return { gifList, gifIsGetting, gifGetFailed, selectedGif };
}

//exports the connected component
export default connect(
  mapStateToProps,
  { reqGifSearch, reqGifTrending, selectGif, getMore }
)(Main);
