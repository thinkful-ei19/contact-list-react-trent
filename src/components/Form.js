import React from 'react';



export default function Form(props) {
    return (
        <form onSubmit={event => {
            event.preventDefault();
            const inputValue = event.target.nameInput.value;
            props.add(inputValue);
            event.target.nameInput.value = '';
        }}>
            <input type="text" name="nameInput"/>
            <button>Submit</button>
        </form>
    );
}