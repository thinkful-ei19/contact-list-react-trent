import React from 'react';

import Form from './Form';

export default function List(props){
    const contacts = props.contacts.map((contact,index) => {
        let display;
        if (contact.editMode) {
            display = <Form idx={index} functionality={(contact,index) => props.editContact(contact,index)}/>
        } else {
            display = `${contact.name} ${contact.number} ${contact.gender}`;
        }

        return (
            <li className={(index+1)%2 ? "list-group-item list-group-item-info" : "list-group-item"} key={index}>
                {display}
                <button onClick={() => {
                    props.delete(index);
                }}>Delete</button>
                <button onClick={() => {
                    props.toggleEdit(index);
                }}>Edit</button>
            </li>
        );
    })
    return (
        <div className="jumbotron">
            <ul className="list-group">
                {contacts}
            </ul>
        </div>
        
    );
}

