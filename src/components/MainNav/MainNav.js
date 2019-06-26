import React from 'react';

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
    this.props.search(this.state.value);
  };

  //Main Navigation should render a search bar and filter options.
  render() {
    return (
      <nav id={this.props.id}>
        <form onSubmit={this.submitHandler}>
          <input type='text' onChange={this.changeHandler} />
          <button type='submit'>Search</button>
        </form>
        <button>Random</button>
        <button onClick={() => this.props.trending()}>Trending</button>
      </nav>
    );
  }
}
