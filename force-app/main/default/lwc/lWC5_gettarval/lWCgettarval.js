import { LightningElement } from 'lwc';

export default class LWCgettarval extends LightningElement {
    name;
    getvalue(event){
       this.name = event.target.value; 
    }
}