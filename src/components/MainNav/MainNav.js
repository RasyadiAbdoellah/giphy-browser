import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';

export default class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      redirect: false
    };
  }

  changeHandler = event => {
    this.setState({ value: event.target.value, redirect: false });
  };

  submitHandler = event => {
    event.preventDefault();
    this.setState({ redirect: true });
  };

  postSubmit = () => {
    this.setState({ redirect: false });
  };

  //Main Navigation should render a search bar and filter options.
  render() {
    return (
      <nav id={this.props.id}>
        {this.state.redirect && <Redirect to={`/search/${this.state.value}`} />}
        <form onSubmit={this.submitHandler}>
          <input type='text' onChange={this.changeHandler} />
          <button type='submit'>Search</button>
        </form>
        <NavLink to='/random'>Random</NavLink>
        <NavLink to='/trending'>Trending</NavLink>
      </nav>
    );
  }
}
