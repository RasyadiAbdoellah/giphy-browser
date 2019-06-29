import React from 'react';
import PropTypes from 'prop-types';

class MainNav extends React.Component {
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
    this.props.apiCall('search', this.state.value);
  };

  //Main Navigation should render a search bar and filter options.
  render() {
    return (
      <nav id={this.props.id}>
        <div className='is-flex '>
          <form onSubmit={this.submitHandler} className='is-flex'>
            <input type='text' onChange={this.changeHandler} />
            <button type='submit'>Search</button>
          </form>
          <div className='is-flex nowrap'>
            <button onClick={() => this.props.apiCall('random')}>Random</button>
            <button onClick={() => this.props.apiCall('trending')}>Trending</button>
          </div>
        </div>
      </nav>
    );
  }
}

MainNav.propTypes = {
  apiCall: PropTypes.func.isRequired
};

export default MainNav;
