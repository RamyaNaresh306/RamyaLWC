import { LightningElement ,wire} from 'lwc';
import CAL_MSGCHANNEL from '@salesforce/messageChannel/SampleMessageChannel__c';
import {subscribe,MessageContext} from 'lightning/messageService';
export default class Pubsubsubscriber extends LightningElement {
@wire(MessageContext) msgContext ;
intialValue;
result=0;
readInput(event){
this.intialValue =event.target.value;
}
connectedCallback(){
this.subscribeMessage();
}
subscribeMessage(){
subscribe(this.msgContext,CAL_MSGCHANNEL,
(message)=>this.handleMessage(message))
}
handleMessage(message){
if(message.operator === 'add'){
this.result = message.constant +Number(this.intialValue) ;
}
else if(message.operator === 'mul'){
this.result = message.constant * Number(this.intialValue);
}
}
}