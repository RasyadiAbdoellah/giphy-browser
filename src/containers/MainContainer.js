import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

// import { RouteWithProps } from '../bin'

import { reqGifSearch, reqGifTrending, selectGif } from '../redux/actions/gif';
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
        <div id='main'>
          <MainNav id='navbar' search={reqGifSearch} trending={reqGifTrending} />
          {
            //UI message based on isGetting, gifGetFailed values
          }
          {!gifIsGetting && !gifGetFailed && <GifList gifs={gifList} select={selectGif} />}
        </div>
        {selectedGif && (
          <div id='detail'>
            <GifDetails gif={selectedGif} />
          </div>
        )}
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
  { reqGifSearch, reqGifTrending, selectGif }
)(Main);
