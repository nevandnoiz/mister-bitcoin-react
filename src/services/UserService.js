import StorageService from './StorageService'

export default {
  getUser,
  signUp,
  addMove
}

function getUser() {
  return StorageService.loadFromStorage('user')
}

function signUp(nickname) {
  let user = {
    name: nickname,
    coins: 100,
    moves: []
  }
  StorageService.saveToStorage('user', user)
}

function addMove(move) {
  move.at = Date.now()
  let user = getUser()
  user.moves.push(move)
  user.coins -= move.amount
  StorageService.saveToStorage('user', user)
}

function _makeId(length = 10) {
  var txt = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}

// function getUser() {
  // return {
  //   name: "Ochoa Hyde",
  //   coins: 100,
  //   moves: []
  // }
// }
