import React, { Component } from 'react';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import Contact from './Contact';

import axios from 'axios';

export class MainView extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      contacts: [],
    };
  }

  componentDidMount() {
    this.getData();
  }
  async getData() {
    axios
      .get('https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json')
      .then((res) => {
        this.setState({ contacts: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { contacts } = this.state;
    console.log('Contacts', contacts);
    return (
      <div>
        <Navbar />
        <SearchBar />
        {contacts ? (
          contacts.map(({ first_name, last_name }) => {
            console.log(first_name);
            // <Contact first_name last_name />;
          })
        ) : (
          <p>...Loading</p>
        )}
        <Contact />
      </div>
    );
  }
}

export default MainView;
