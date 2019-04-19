import { decorate, observable, action, computed, runInAction } from 'mobx'
import BitcoinService from '../services/BitcoinService'

class BitCoinStore {
    bitCoinRate = ''

    async loadBitCoinRate() {
        let bitCoinRate = await BitcoinService.getRate(1)
        runInAction(() => this.bitCoinRate = bitCoinRate)
        this.bitCoinRate = bitCoinRate
    }
}

decorate(BitCoinStore,
    {
        bitCoinRate: observable,
        loadBitCoinRate: action
    })

export default new BitCoinStore;