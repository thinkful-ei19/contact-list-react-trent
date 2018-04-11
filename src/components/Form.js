import React from 'react';



export default function Form(props) {
    return (
        <form onSubmit={event => {
            event.preventDefault();
            const inputValue = {
                name : event.target.nameInput.value, 
                number: event.target.numberInput.value, 
                gender: event.target.gender.value
            };
            props.add(inputValue);
            event.target.nameInput.value = ''; 
            event.target.numberInput.value = '';
        }}>
            <input type="text" name="nameInput" placeholder="name" />
            <input type="text" name="numberInput" placeholder="555-555-5555" />
            <input type="radio" name="gender" id="male" value="male"/><label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female"/><label htmlFor="female">Female</label>
            <button>Submit</button>
        </form>
    );
}