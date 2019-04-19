import { decorate, observable, action, computed, runInAction } from 'mobx'
import ContactService from '../services/ContactService.js'


class ContactsStore {
    contacts = '';

    async loadContacts() {
        let contacts = await ContactService.getContacts()
        this.contacts = contacts
    }

    async getContactById(contactId) {
        let contact = await ContactService.getContactById(contactId)
        return contact
    }

    async saveContact(name, email, phone, _id) {
        await ContactService.saveContact(name, email, phone, _id)
    }

    async deleteContact(contactId) {
        await ContactService.deleteContact(contactId)
    }

    // async loadBitCoinRate() {
    //     let bitCoinRate = await BitcoinService.getRate(1)
    //     runInAction(() => this.bitCoinRate = bitCoinRate)
    //     this.bitCoinRate = bitCoinRate
    // }
}

decorate(ContactsStore,
    {
        contacts: observable,
        loadContacts: action,
        getContactById: action,
        saveContact: action,
        deleteContact: action,
        // loadBitCoinRate: action
    })

export default new ContactsStore;