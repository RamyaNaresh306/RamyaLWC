import { LightningElement,wire } from 'lwc';
import findContacts from '@salesforce/apex/lwc18controller.findContacts';


export default class Lwc18srccont extends LightningElement {

    searchKey = '';

    @wire(findContacts, { searchKey: '$searchKey' })
    contacts;

    handleKeyChange(event) {
        this.searchKey = event.target.value;
    }

}