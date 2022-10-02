import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';
import {publish, MessageContext} from 'lightning/messageService';


export default class Publisher extends LightningElement {
    @wire(MessageContext) messageContext;
    msg;
    getmessage(event){
        this.msg = event.target.value;
    }

    handleclick() {
        const message = {
            recordId : '0018c00002SAkiZAAT',
            message : this.msg,
            recordData: {accountName: 'Burlington Textiles Corp of America'}

        };
        publish(this.messageContext,SAMPLEMC, message );
    }
}