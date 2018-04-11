import React from 'react';


export default function List(props){
    const contacts = props.contacts.map((contact,index) => {
        return (
            <li key={index}>
            {contact.name} {contact.number} {contact.gender} <button onClick={() => {
                props.delete(index);
            }}>Delete</button>
            </li>
        );
    })
    return (
        <ul>
            {contacts}
        </ul>
    );
}