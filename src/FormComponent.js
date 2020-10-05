

import React from 'react'

const FormComponent = (props) => {
    return (
        <div className="form-component">
            <br/><br/><br/><br/><br/>
            <form className="form">
                    <label>Username: </label>
                    <input id='email' onChange={null} name='email' type='text' />
                    <label>Password: </label>
                    <input id='password' onChange={null} name='password' type='password' />
                    <br/><br/>
                    <label>Input field: </label>
                    <input id='another input field' onChange={null} name='another input field' type='text' />
                    <label>Input field: </label>
                    <input id='last input field' onChange={null} name='last input field' type='text' />
            </form>
        </div>
    )
}

export default FormComponent




