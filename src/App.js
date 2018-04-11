import React, { Component } from 'react';
import './App.css';
import './components/form.css'
import Form from './components/Form';
import List from './components/List';


class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        {name: 'Trent Duncan', number: '916-899-8319', gender: 'male', editMode: false},
        {name: 'Bob Guy', number: '916-758-6758', gender: 'male', editMode: false},
        {name: 'Genevive User', number: '916-758-6758', gender: 'female', editMode: false}
      ]
    }
  }

  addContact(contact) {
    this.setState({
      contacts:[...this.state.contacts, contact]
    });
  }
  deleteContact(index) {
    let newContacts = this.state.contacts.slice();
    newContacts.splice(index,1);
    this.setState({
      contacts: newContacts
    });
  }
  toggleEditMode(index){
    let newContacts = this.state.contacts.slice();
    newContacts[index].editMode = !newContacts[index].editMode;
    this.setState({
      contacts: newContacts
    });
  }
  editContact(contact, index){
    let newContacts = this.state.contacts.slice();
    newContacts.splice(index, 1, contact);
    this.setState({
      contacts: newContacts
    });
  }

  sortContacts(contacts) {
    return contacts.sort((a,b) => {
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
  }

  render() {
    const contacts = this.sortContacts(this.state.contacts);
    return (
      <div className="container">
        <Form functionality={contact => this.addContact(contact)}/>
        <List contacts={contacts} delete={index => this.deleteContact(index)} 
          toggleEdit={index => this.toggleEditMode(index)}
          editContact={(contact,index) => this.editContact(contact, index)}
        />
      </div>
    );
  }
}

export default App;
