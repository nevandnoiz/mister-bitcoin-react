import React, { Component } from 'react'
import './ContactEditPage.css'


export default class ContactEditPage extends Component {
    state = {
        isCreate: false,
    }

    toDetails = () => {
        if (!this.state.isCreate) this.props.history.push(`/contact/${this.state._id}`)
        else this.props.history.push(`/contact`)
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        let { name, email, phone, _id } = this.state
        let done = await this.props.store.saveContact({ name, email, phone, _id })
        if (!this.state.isCreate) this.props.history.push(`/contact/${this.state._id}`)
        else this.props.history.push(`/contact`)
    }

    handleDelete = async () => {
        let done = await this.props.store.deleteContact(this.state._id)
        this.props.history.push(`/contact`)
    }

    async componentDidMount() {
        let contactId = this.props.match.params.contactId
        if (!contactId) {
            let contact = {
                name: '',
                email: '',
                phone: ''
            }
            let { name, email, phone } = contact
            return this.setState({ name, email, phone, isCreate: true })
        }
        const contact = await this.props.store.getContactById(contactId)
        let { _id, name, email, phone } = contact
        this.setState({ _id, name, email, phone })
    }


    render() {
        return (
            <div className="edit-page">
                <div className="edit-nav">
                    <button onClick={this.toDetails} className="return-button"><i className="fas fa-arrow-left"></i></button>
                    {!this.state.isCreate && <button onClick={this.handleDelete} className="trash-button">
                        <i className="fas fa-trash"></i>
                    </button>}
                </div>
                <div className="edit-container">
                    <img src={`https://robohash.org/${this.state._id}`}></img>
                    <form onSubmit={this.handleSubmit}>
                        <input name="name" defaultValue={this.state.name || ''} type="text" placeholder="Name" onChange={this.handleInputChange} />
                        <input name="email" defaultValue={this.state.email || ''} type="text" placeholder="Email" onChange={this.handleInputChange} />
                        <input name="phone" defaultValue={this.state.phone || ''} type="text" placeholder="Phone" onChange={this.handleInputChange} />
                        <button>Done</button>
                    </form>
                </div>
            </div>
        )
    }
}
