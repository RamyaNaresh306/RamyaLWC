import { LightningElement } from 'lwc';

export default class Lifecyclehook extends LightningElement {
    constructor(){
        super();
        console.log("Inside Constructor");
    }
    connectedCallback(){
        console.log("Inside Connectedcallback");
    }
    renderedCallback(){
        console.log("Inside Rendercallback")
    }
    
}