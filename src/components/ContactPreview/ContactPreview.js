import React from 'react'
import './ContactPreview.css'

function ContactPreview(props) {
    const {contact}=props
    return (
        <div className="contact-preview">
            <img src={`https://robohash.org/${contact._id}`}></img>
            <span>{contact.name} </span>
        </div>
    )
}

export default ContactPreview
