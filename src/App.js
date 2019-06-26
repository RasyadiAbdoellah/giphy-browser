import React, { Component } from 'react';
import { MainContainer } from './containers';
import { Provider } from 'react-redux';
import store from './redux/store';

//todos:
//simplify components by moving mainContainer logic to app
//remove route '/'

//THINGS TO TEST
// App renders search, gifList, gifs, gifDetail
// shallow renders for search, gifDetail -> gifDetail will need to be provided with dummy data
// test mount gifList

//REDUX TESTS
// test get actionCreators
// test reducer output
// check whether reducer output is correct

//INTERACTION TESTS
// search sends CORRECT dispatch with value of input
// gifList renders right amt of children from dummy data
// gifDetail gets correct gif when passed an id -> will need to make dummy store
// renders load more button if response's totalCount > 25

//REACH GOALS
// ROUTING

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <div className='flex-container'>
            <MainContainer />
          </div>
        </div>
      </Provider>
    );
  }
}
