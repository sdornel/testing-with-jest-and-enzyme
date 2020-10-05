

import React from 'react'

class FormComponent extends React.Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            anotherInputField: '',
            lastInputField: ''
        }
    }
    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render(){
        return (
            <div className="form-component">
                <br/><br/><br/><br/><br/>
                <form className="form">
                        <label>Username: </label>
                        <input id='email' onChange={this.handleInputChange} name='email' type='text' />
                        <label>Password: </label>
                        <input id='password' onChange={this.handleInputChange} name='password' type='password' />
                        <br/><br/>
                        <label>Input field: </label>
                        <input id='another-input-field' onChange={this.handleInputChange} name='anotherInputField' type='text' />
                        <label>Input field: </label>
                        <input id='last-input-field' onChange={this.handleInputChange} name='lastInputField' type='text' />
                </form>
            </div>
        )
    }
}

export default FormComponent




