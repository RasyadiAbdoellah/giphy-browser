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
      selectedGif,
      reqGifSearch,
      reqGifTrending,
      selectGif,
      queryType,
      gifIsGetting,
      gifGetFailed
    } = this.props;
    const gifReqStatus = !gifIsGetting && !gifGetFailed;
    const notRandom = queryType !== 'random';
    return (
      <>
        <MainNav id='navbar' search={reqGifSearch} trending={reqGifTrending} />
        <div className='flex-container'>
          <div id='main'>
            {
              //UI message based on isGetting, gifGetFailed values
            }
            {gifReqStatus && notRandom && <GifList gifs={gifList} select={selectGif} />}
            {(!gifList || gifList.length !== 0) && notRandom && (
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
  const queryType = getStateGifs(state).queryType;

  return { gifList, gifIsGetting, gifGetFailed, selectedGif, queryType };
}

//exports the connected component
export default connect(
  mapStateToProps,
  { reqGifSearch, reqGifTrending, selectGif, getMore }
)(Main);
