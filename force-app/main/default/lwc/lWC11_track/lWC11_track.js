import { LightningElement,track } from 'lwc';

export default class LWC11_track extends LightningElement {


    @track 
    fullname = {firstname:"Ramya", lastname: "Nareskumar"};

    changenam(event){
        this.fullname.firstname = event.target.value;
    }
}