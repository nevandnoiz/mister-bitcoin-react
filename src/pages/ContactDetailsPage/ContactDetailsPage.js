import React, { Component } from 'react'
import './ContactDetailsPage.css'
import UserStore from '../../store/UserStore.js'
import TransferFund from '../../components/TransferFund/TransferFund.js'
import MovesList from '../../components/MovesList/MovesList.js'


export default class ContactDetailsPage extends Component {

    state = {
        contact: '',
        displayMovesList: true,
    }

    toList = () => {
        this.props.history.push('/contact')
    }

    toEdit = () => {
        this.props.history.push(`/contact/edit/${this.state.contact._id}`)
    }

    toggleMovesList = (boolean) => {
        this.setState({ displayMovesList: boolean })
    }

    updateList = () => {
        this.toggleMovesList(false)
        setTimeout(this.toggleMovesList, 50, true)
        this.setState({
            num: this.state.num++
        })
    }

    async componentDidMount() {
        let contactId = this.props.match.params.contactId
        const contact = await this.props.store.getContactById(contactId)
        this.setState({ contact })
    }


    render() {
        const { contact } = this.state
        return (
            <div className="details-page">
                <div className="details-nav">
                    <button onClick={this.toList} className="return-button"><i className="fas fa-arrow-left"></i></button>
                    <button onClick={this.toEdit} className="edit-button"><i className="fas fa-pencil-alt"></i></button>
                </div>
                <div className="details-container">
                    <img src={`https://robohash.org/${contact._id}`}></img>
                    <div className="info-container">
                        <h1>{this.state.contact.name}</h1>
                        <h2>Email: {contact.email}</h2>
                        <h2>Phone: {contact.phone}</h2>
                    </div>
                </div>
                {this.state.contact && < TransferFund contact={contact} updateList={this.updateList} />}
                {this.state.displayMovesList && contact && <MovesList store={UserStore} contact={contact} toggleMovesList={this.toggleMovesList} />}
            </div>
        )
    }
}
