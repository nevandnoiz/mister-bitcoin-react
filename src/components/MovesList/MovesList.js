import React, { Component } from 'react'
import { observer } from 'mobx-react'
import './MovesList.css'

export class MovesList extends Component {
    state = {
        moves: []
    }
    componentDidMount() {
        let user = this.props.store.user
        if (!user) {
            this.props.store.loadUser()
            user = this.props.store.user
        }
        let moves = user.moves.filter(move => move.toId === this.props.contact._id)
        if (moves.length) {
            this.setState({ moves })
            return this.props.toggleMovesList(true)
        }
        else return this.props.toggleMovesList(false)
    }

    render() {
        return (
            <div className="moves-list">
                <h1>Your moves:</h1>
                {this.state.moves.map((move, idx) => (
                    <div key={idx} className="move-container">
                        At: {move.at} <br />
                        Amount: {move.amount} coins
                    </div>
                ))}
            </div>
        )
    }
}

export default observer(MovesList)
