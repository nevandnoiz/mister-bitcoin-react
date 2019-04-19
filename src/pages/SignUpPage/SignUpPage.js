import React, { Component } from 'react';
import { observer } from 'mobx-react'
import './SignUpPage.css';

class SignUpPage extends Component {
    state = {
        nickname: ''
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSignUp = () => {
        this.props.resetRedirect()
        this.props.store.signUp(this.state.nickname)
        this.props.history.push(`/`)
    }

    render() {
        return (
            <div className="signup-page">
                <div className="signup-container">
                    <i className="fab fa-bitcoin"></i>
                    <p>Please enter your name:</p>
                    <input value={this.state.nickname} name="nickname" type="text" onChange={this.handleInputChange} />
                    <button onClick={this.onSignUp}>Sign Up</button>
                </div>
            </div>
        );
    }
}

export default observer(SignUpPage);
