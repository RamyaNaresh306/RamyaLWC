import { LightningElement } from 'lwc';

export default class LWC3 extends LightningElement {
    ename = "Nilesh";
    esal = 1000;
    ecity = "OH";
    changeemployee(){
        this.ename = "Adheesh";
        this.esal = 5000;
        this.ecity = "NY";
    }
}