import React, { Component } from 'react'
import './ContactFilter.css'

export default class ContactFilter extends Component {
    state = {
        inputText: {
            term: ''
        }
    }

    handleChange = (e) => {
        this.setState({ inputText: { term: e.target.value } }, () => this.props.filterContacts(this.state.inputText))
    }

    render() {
        return (
            <div className="contact-filter">
                <input type="text" onChange={this.handleChange} placeholder="Search Contact" />
            </div>
        )
    }
}
