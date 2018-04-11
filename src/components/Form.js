import React from 'react';



export default function Form(props) {
    return (
        <form className="form-inline" onSubmit={event => {
            event.preventDefault();
            const inputValue = {
                name : event.target.nameInput.value, 
                number: event.target.numberInput.value, 
                gender: event.target.gender.value,
                editMode: false
            };
            props.functionality(inputValue, props.idx);
            event.target.nameInput.value = ''; 
            event.target.numberInput.value = '';
        }}>
            <div className="form-group">
              <label for="nameInput">Name </label>
              <input type="text" className="form-control" name="nameInput" id="nameInput" placeholder="name" />
            </div>
            <div className="form-group">
              <label for="numberInput">Phone Number </label>
              <input type="text" className="form-control" name="numberInput" id="numberInput" placeholder="555-555-5555" />
            </div>
            <label className="radio-inline" htmlFor="male">
              <input type="radio" name="gender" id="male" value="male"/> Male
            </label>
            <label className="radio-inline" htmlFor="female">
              <input type="radio" name="gender" id="female" value="female"/> Female
            </label>
            <button className="btn btn-default">Submit Contact</button>
        </form>
    );
}