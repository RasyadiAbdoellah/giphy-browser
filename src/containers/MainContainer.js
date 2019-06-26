import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

// import { RouteWithProps } from '../bin'

import { reqGifSearch, reqGifTrending } from '../redux/actions/gif';
import { getGifsList, getStateGifs } from '../redux/selectors';
import { GifList, MainNav } from '../components';
import { GifDetailsContainer } from '.';

export class Main extends React.Component {
  render() {
    const { gifList, gifIsGetting, gifGetFailed, reqGifSearch, reqGifTrending } = this.props;
    return (
      <>
        <div id='main'>
          <Route
            path='/search/:query'
            render={props => {
              const {
                match: { params }
              } = props;
              return <GifList gifs={gifList} req={reqGifSearch} params={params.query} {...props} />;
            }}
          />
          <Route
            path='/trending'
            render={props => {
              return <GifList gifs={gifList} req={reqGifTrending} {...props} />;
            }}
          />
        </div>
        <Route path={['/search/:query/:id', '/trending/:id']} component={GifDetailsContainer} />
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
  { reqGifSearch, reqGifTrending }
)(Main);
