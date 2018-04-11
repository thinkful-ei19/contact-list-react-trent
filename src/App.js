import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';


class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: []
    }
  }

  addContact(contact) {
    this.setState({
      contacts:[...this.state.contacts, contact]
    });
  }

  render() {
    return (
      <div>
        <Form add={contact => this.addContact(contact)}/>
        <List contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
