import React from 'react';



export default function Form() {
    return (
        <form onSubmit={event => {
            event.preventDefault();
            console.log('works');
        }}>
            <input type="text" name="userInput"/>
            <button>Submit</button>
        </form>
    );
}