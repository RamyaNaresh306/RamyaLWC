import { LightningElement, wire } from 'lwc';
import SAMPLEMC from  '@salesforce/messageChannel/SampleMessageChannel__c';
import { subscribe, unsubscribe, APPLICATION_SCOPE, MessageContext } from 'lightning/messageService';

export default class Subscriber extends LightningElement {
    receivedMessage;
    subscription = null;
    isDisabled = false;
    isDisabledUnsb = true;
    @wire(MessageContext) messageContext;

    subscribemc(){
        this.isDisabled = true;
        this.isDisabledUnsb = false;
        this.subscription = subscribe(this.messageContext, SAMPLEMC, 
            message => {
                this.handlemessage(message);
                
            },
            {scope: APPLICATION_SCOPE}
            );
    }
    handleMessage(message){
        this.receivedMessage =  message? JSON.stringify(message, null, "\t") : "no message payload";

    }
    unsubscribemc(){
        this.isDisabled = false;
        this.isDisabledUnsb = true;
        unsubscribe(this.subscription);
        this.receivedMessage = '';
    }
}