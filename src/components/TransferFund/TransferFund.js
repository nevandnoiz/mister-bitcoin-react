import React, { Component } from 'react'
import './TransferFund.css'
import UserStore from '../../store/UserStore.js'
import { observer } from 'mobx-react'

export class TransferFund extends Component {
    state = {
        to: '',
        toId: '',
        amount: ''
    }

    componentDidMount() {
        this.setState({
            to: this.props.contact.name,
            toId: this.props.contact._id,
        })
    }

    handleInputChange = (e) => {
        if (isNaN(+e.target.value)) return
        this.setState({ [e.target.name]: e.target.value });
    }

    onTransfer = () => {
        let { to, amount, toId } = this.state
        if (amount < 1) return console.log('Enter a number bigger than 0')
        UserStore.addMove({ to, amount, toId })
        this.props.updateList()
        this.setState({ amount: '' });
    }

    render() {
        const contact = this.props.contact
        return (
            <div className="transfer-container">
                <h1>Transfer coins to {contact.name}:</h1>
                <div className="transfer-form">Amount: <input value={this.state.amount} type="text" name="amount" onChange={this.handleInputChange} />
                    <button onClick={this.onTransfer}>Transfer</button></div>
            </div>
        )
    }
}

export default observer(TransferFund)
