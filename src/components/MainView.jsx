import React, { Component } from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';

export class MainView extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <SearchBar />
      </div>
    );
  }
}

export default MainView;
