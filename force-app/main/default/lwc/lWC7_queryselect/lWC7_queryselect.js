import { LightningElement } from 'lwc';

export default class LWC7_queryselect extends LightningElement {
    name;
    age;
    getvalue(event){
        const n = this.template.querySelectorAll('lightning-input');
        this.name = n[0].value;
        this.age = n[1].value;
    
    }
}