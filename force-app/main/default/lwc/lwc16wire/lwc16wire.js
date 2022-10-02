import { LightningElement,wire } from 'lwc';
import acc from '@salesforce/apex/lwc16controller.getaccounts';
const columns = [
    { label:"Acc name", fieldName: "Name", type:"string"},
    { label:"Acc Industry", fieldName: "Industry", type:"string"}
];

export default class Lwc16wire extends LightningElement {

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
    
    columns = columns;

    @wire(acc) cons;

    checklifecycel(){
        console.log("inside function");

    }
}