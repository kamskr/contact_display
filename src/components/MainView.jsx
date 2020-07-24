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
      contacts: undefined,
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
    return (
      <div>
        <Navbar />
        <SearchBar />
        {contacts ? (
          contacts.map((contact) => <Contact contact={contact} key={contact.id} />)
        ) : (
          <p>...Loading</p>
        )}
      </div>
    );
  }
}

export default MainView;
