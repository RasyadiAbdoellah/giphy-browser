import React from 'react';
import { NavLink } from 'react-router-dom';

export default class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  changeHandler = event => {
    this.setState({ value: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
  };

  //Main Navigation should render a search bar and filter options.
  render() {
    return (
      <nav id={this.props.id}>
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
