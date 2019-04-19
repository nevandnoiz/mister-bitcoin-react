import { decorate, observable, action, computed, runInAction } from 'mobx'
import UserService from '../services/UserService'

class UserStore {
    user = '';

    loadUser() {
        let user = UserService.getUser()
        this.user = user
    }

    signUp(nickname) {
        let user = UserService.signUp(nickname)
        this.user = user
    }

    addMove(to, amount, toId) {
        let user = UserService.addMove(to, amount, toId)
        this.user = user
    }

}

decorate(UserStore,
    {
        user: observable,
        signUp: action,
        addMove: action,
        loadUser: action,
    })

export default new UserStore;