import React from 'react';



export default function Form(props) {
    return (
        <form onSubmit={event => {
            event.preventDefault();
            const inputValue = {name : event.target.nameInput.value, number: event.target.numberInput.value};
            props.add(inputValue);
            event.target.nameInput.value = ''; 
            event.target.numberInput.value = '';
        }}>
            <input type="text" name="nameInput" placeholder="name" required/>
            <input type="text" name="numberInput" placeholder="555-555-5555" required/>
            <button>Submit</button>
        </form>
    );
}