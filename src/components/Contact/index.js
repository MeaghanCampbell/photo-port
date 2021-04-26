import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers'

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // destructure
    const {name, email, message} = formState
    //use state hook to handle error message for email
    const [errorMessage, setErrorMessage] = useState('')

    //... is the spread operator so we can retail the other key value pairs in the form state object, without it we'd only get the name: value pair
    // namd property of target refers to the name attribute of form element
    // that attribute matches the formstate... [] allows us to create dynamic property names
    function handleChange(e) {
        // if input is email than validate the value of the input field with the helper function and assign it's return to isValid
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value)
            console.log(isValid)
            // is valid conditional
            if (!isValid) {
                setErrorMessage('Your email is invalid')
            } else {
                // make sure name and message are included
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`)
                } else {
                    setErrorMessage('')
                }
            }
        }
        // only allow state to update if there is not error message
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }

    // handle for submits
    function handleSubmit(e) {
        e.preventDefault()
    }
    // onBlur is different than onChange, onBlur allows the event to fire when the user has changed focus from the input field
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" defaultValue={name} onBlur={handleChange} name="name"/>
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" defaultValue={email} onBlur={handleChange} name="email"/>
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5"/>
            </div>
            {errorMessage && (
                // the above statement can also be written as if(errorMessage) {}
                // we use && operator to short circuit if the value is true, the second expression is evaluated
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;