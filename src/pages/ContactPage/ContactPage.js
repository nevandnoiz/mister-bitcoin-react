import React, { Component } from 'react'
import './ContactPage.css'
import { observer } from 'mobx-react'
import ContactFilter from '../../components/ContactFilter/ContactFilter.js'
import ContactList from '../../components/ContactList/ContactList.js'


class ContactPage extends Component {
    state = {
        term: ''
    }

    toDetails = (contactId) => {
        this.props.history.push(`/contact/${contactId}`)
    }

    toEdit = () => {
        this.props.history.push(`/contact/edit`)
    }

    filterContacts = ({ term }) => this.setState({ term })

    async componentDidMount() {
        await this.props.store.loadContacts()
    }


    render() {
        const { term } = this.state
        const contacts = this.props.store.contacts
        if (!contacts) return <div></div>
        const filteredContacts = contacts.filter(contact => {
            return contact.name.includes(term) ||
                contact.email.includes(term) ||
                contact.phone.includes(term)
        })
        return (
            <div className="contact-page">
                <ContactFilter filterContacts={this.filterContacts} />
                <ContactList contacts={filteredContacts} toDetails={this.toDetails} />
                <button onClick={this.toEdit}><i className="fas fa-plus"></i></button>
            </div>
        )
    }
}

export default observer(ContactPage)
