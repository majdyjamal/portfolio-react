import React, { useState } from "react";

const Contact = () => {
    const [formFieldsState, setFormFieldsState] = useState({
        name: '',
        emailAddress: '',
        message: '',
    });

    const { name, emailAddress, message } = formFieldsState;

    const [validationError, setValidationError] = useState({
        name: '',
        emailAddress: '',
        message: '',
    });

    // https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    const getValidationErrorMessage = () => {
        return ((validationError.name || '') + " " + (validationError.emailAddress || '') + " " +(validationError.message || '')).trim();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validationError.name && !validationError.emailAddress && !validationError.message) {
            console.log('The following form fields were submitted:', formFieldsState);
        }
    };

    const handleChange = (e) => {
        let isValid = true;
        if (e.target.name === 'emailAddress') {
            isValid = validateEmail(e.target.value);
            setValidationError( { ...validationError, [e.target.name]: (!isValid ? 'Invalid Email Address.': '')});
        } else {
            isValid = e.target.value && e.target.value.length > 0;
            setValidationError( { ...validationError, [e.target.name]: (!isValid ? `${e.target.name} is required.`: '')});
        }

        if (isValid) {
            setFormFieldsState({ ...formFieldsState, [e.target.name]: e.target.value });
        }
    };

    return (
        <section className="container">
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

                    {getValidationErrorMessage() &&
                        (<div className="alert alert-danger mt-3" role="alert">{getValidationErrorMessage()}</div>)}
                    
                    <div className="row">
                        <button className="col mt-3" type="Submit">Send 📩</button>
                    </div>
                </form>



            </div>
        </section>

    );
}

export default Contact;