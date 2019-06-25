import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MainContainer } from './containers';
import { Provider } from 'react-redux';
import store from './redux/store'

// Goal for auth is to have a custom landing page that stops ppl from using the app if they're not signed in.
// on sign in it redirect to /home or /main or /dash.
// on sign out it redirects back to /
// signed in  users get autoredirected to /home or whatever if they navigate to /
// TODOS:
// figure out how to make custom signin widget and prevent initial redirect
// figure out how to tie in auth status to redux
// figure out routing logic

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
        <div className="App">
          <div className="flex-container">
            <Route
              path="/"
              render={props => <MainContainer {...props} />}
            />
          </div>
        </div>
        </Provider>
      </BrowserRouter>
    );
  }
}
