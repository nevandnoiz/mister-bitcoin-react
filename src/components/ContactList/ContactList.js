import React from 'react'
import './ContactList.css'
import ContactPreview from '../ContactPreview/ContactPreview.js'

function ContactList(props) {
    return (
        <div className="contacts-page">
            <ul className="contact-list">
                {props.contacts.map(contact => (
                    <li key={contact._id} onClick={() => props.toDetails(contact._id)}>
                        <ContactPreview contact={contact} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContactList
