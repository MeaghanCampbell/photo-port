import React, { useState } from 'react'

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // destructure
    const {name, email, message} = formState

    //... is the spread operator so we can retail the other key value pairs in the form state object, without it we'd only get the name: value pair
    // namd property of target refers to the name attribute of form element
    // that attribute matches the formstate... [] allows us to create dynamic property names
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    // handle for submits
    function handleSubmit(e) {
        e.preventDefault()
        console.log(formState)
    }

    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" defaultValue={name} onChange={handleChange} name="name"/>
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" defaultValue={email} onChange={handleChange} name="email"/>
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" defaultValue={message} onChange={handleChange} rows="5"/>
            </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;