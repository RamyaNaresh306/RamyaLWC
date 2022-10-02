import { LightningElement,wire } from 'lwc';
import CAL_MSGCHANNEL from '@salesforce/messageChannel/SampleMessageChannel__c';
import { publish,MessageContext } from 'lightning/messageService';
export default class Pubsubpublisher extends LightningElement {
@wire(MessageContext) msgContext;
addition(){
const payload={operator:'add',
constant:1};
publish(this.msgContext,CAL_MSGCHANNEL,payload);
}
multiplication(){
const payload={operator:'mul',
constant:5};
publish(this.msgContext,CAL_MSGCHANNEL,payload)
}
}