import React, { useState } from "react";

const Contact = () => {
    const [formFieldsState, setFormFieldsState] = useState({
        name: '',
        emailAddress: '',
        message: '',
    });

    const { name, emailAddress, message } = formFieldsState;

    const [validationError, setValidationError] = useState('');

    // https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validationError) {
            console.log('The following form fields were submitted:', formFieldsState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setValidationError('Invalid Email Address.');
            } else {
                setValidationError('');
            }
        } else {
            if (!e.target.value.length) {
                setValidationError(`${e.target.name} is required.`);
            } else {
                setValidationError('');
            }
        }
        if (!validationError) {
            setFormFieldsState({ ...formFieldsState, [e.target.name]: e.target.value });
            console.log('Updated the form state:', formFieldsState);
        }
    };

    return (
        <section className="container">
            <h1 className="row" id="Contact">Contact</h1>
            <div>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="row">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div className="row">
                        <label htmlFor="emailAddress">Email address:</label>
                        <input type="email" name="emailAddress" defaultValue={emailAddress} onBlur={handleChange} />
                    </div>
                    <div className="row">
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" rows="8" defaultValue={message} onBlur={handleChange} />
                    </div>

                    {validationError &&
                        (<div class="alert alert-danger" role="alert">{validationError}</div>)}
                    
                    <div className="row">
                        <button className="col mt-3" type="Submit">Send 📩</button>
                    </div>
                </form>



            </div>
        </section>

    );
}

export default Contact;