import axios from 'axios'

export default {
  getRate,
  getMarketPrice,
  getConfirmedTransactions
}

async function getRate(coins) {
  let res = await axios(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
  return res.data
}

async function getMarketPrice(coins) {
  let res = await axios(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
  return res.data
}

async function getConfirmedTransactions(coins) {
  let res = await axios(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
  return res.data
}
