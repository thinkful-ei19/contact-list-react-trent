import React from 'react';


export default function List(props){
    const contacts = props.contacts.map((contact,index) => {
        return (
            <li key={index}>{contact}</li>
        );
    })
    return (
        <ul>
            {contacts}
        </ul>
    );
}