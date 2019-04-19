import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { observer } from 'mobx-react'
import './App.css';
import UserStore from './store/UserStore.js'
import BitCoinStore from './store/BitCoinStore.js'
import ContactsStore from './store/ContactsStore.js'
import Header from './components/Header/Header.js'
import HomePage from './pages/HomePage/HomePage.js'
import SignUpPage from './pages/SignUpPage/SignUpPage.js'
import StatisticsPage from './pages/StatisticsPage/StatisticsPage.js'
import ContactPage from './pages/ContactPage/ContactPage.js'
import ContactDetailsPage from './pages/ContactDetailsPage/ContactDetailsPage.js'
import ContactEditPage from './pages/ContactEditPage/ContactEditPage.js'


class App extends Component {
  state = {
    redirect: false
  }

  async componentDidMount() {
    await BitCoinStore.loadBitCoinRate()
    UserStore.loadUser()
    if (!UserStore.user) return this.setState({ redirect: true })
  }

  resetRedirect = () => {
    this.componentDidMount()
    this.setState({ redirect: false })
  }

  render() {
    return (
      <div class="App">
        <Header />
        <hr />
        <HashRouter>
          <Switch >
            {/* <Route exact path="/signup" component={SignUpPage}></Route> */}
            <Route exact path="/signup"
              render={(props) => <SignUpPage resetRedirect={this.resetRedirect} {...props} store={UserStore} />}>
            </Route>
            {this.state.redirect && <Redirect to='/signup' />}
            <Route exact path="/" render={(props) => <HomePage {...props} BitCoinStore={BitCoinStore} UserStore={UserStore} />} ></Route>
            <Route exact path="/statistics" component={StatisticsPage}></Route>
            <Route exact path="/contact" render={(props) => <ContactPage {...props} store={ContactsStore} />} >
            </Route>
            <Route path="/contact/edit/:contactId?" render={(props) => <ContactEditPage {...props} store={ContactsStore} />}></Route>
            <Route path="/contact/:contactId" render={(props) => <ContactDetailsPage {...props} store={ContactsStore} />}>
            </Route>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default observer(App);
