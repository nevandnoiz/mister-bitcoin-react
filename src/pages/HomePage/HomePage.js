

import React from 'react'
import { observer } from 'mobx-react'
import './HomePage.css';

function HomePage(props) {
  const user = props.UserStore.user
  const bitCoinRate = props.BitCoinStore.bitCoinRate
  if (user && bitCoinRate) return (
    <div className="home-container">
      <h1>Hello {user.name}</h1>
      <h2><i className="fas fa-coins"></i> Number of coins: {user.coins}</h2>
      <h2><i className="fab fa-bitcoin"></i> BTC: {bitCoinRate}</h2>
    </div>
  )
  return (
    <div className="home-container"></div>
  )
}

export default observer(HomePage);

