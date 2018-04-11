import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';


class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        {name: 'Trent Duncan', number: '916-899-8319', gender: 'male'},
        {name: 'Bob Guy', number: '916-758-6758', gender: 'male'},
        {name: 'Genevive User', number: '916-758-6758', gender: 'male'}
      ]
    }
  }

  addContact(contact) {
    this.setState({
      contacts:[...this.state.contacts, contact]
    });
  }
  deleteContact(index) {
    this.state.contacts.splice(index,1);
    this.setState({
      contacts: this.state.contacts
    });
  }

  render() {
    const contacts = this.state.contacts.sort((a,b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    return (
      <div>
        <Form add={contact => this.addContact(contact)}/>
        <List contacts={contacts} delete={index => this.deleteContact(index)}/>
      </div>
    );
  }
}

export default App;
