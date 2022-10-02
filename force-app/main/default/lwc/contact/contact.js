import { LightningElement} from 'lwc';

import CONTACT_DETAILS from '@salesforce/schema/Contact_Details__c';

import PHONE_DETAILS from '@salesforce/schema/Contact_Details__c.Phone_Number__c';
import EMAIL_DETAILS from '@salesforce/schema/Contact_Details__c.Email_ID__c';
import ADD1_DETAILS from '@salesforce/schema/Contact_Details__c.Address_Line_1__c';
import ADD2_DETAILS from '@salesforce/schema/Contact_Details__c.Address_Line_2__c';
import ZIPCODE_DETAILS from '@salesforce/schema/Contact_Details__c.Zip__c';
import CITY_DETAILS from '@salesforce/schema/Contact_Details__c.City__c';
import COUNTY_DETAILS from '@salesforce/schema/Contact_Details__c.County__c';
import COUNTRY_DETAILS from '@salesforce/schema/Contact_Details__c.Country__c';
import STATE_DETAILS from '@salesforce/schema/Contact_Details__c.State__c';
import FAXNUM_DETAILS from '@salesforce/schema/Contact_Details__c.Fax_Number__c';

import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'; 
import { NavigationMixin } from 'lightning/navigation';


export default class Contact extends NavigationMixin(LightningElement) {


conId;
prevval;

phonenumb;
emailid;
addline1;
addline2;
zipcode;
city;
county;
state;
country;
faxnum;


get options() {
    return [
        { label: 'Canton', value: 'Canton' },
        { label: 'Massillion', value: 'Massillion' },
        { label: 'Hartville', value: 'Hartville' }
        ,
    ];
}
get option1() {
    return [
        { label: 'Stark', value: 'Stark' },
        { label: 'Summit', value: 'Summit' },
        { label: 'Jackson', value: 'Jackson' }
        ,
    ];
}
get option2() {
    return [
        { label: 'Newyork', value: 'Newyork' },
        { label: 'Ohio', value: 'Ohio' },
        { label: 'Michigan', value: 'Michigan' }
        ,
    ];
}
get option3() {
    return [
        { label: 'USA', value: 'USA' },
        { label: 'India', value: 'India' },
        { label: 'Germany', value: 'Germany' }
        ,
    ];
}


handlechange(event){
    this.conId = undefined;
    if(event.target.label ==='Phone Number'){
        this.phonenumb = event.target.value;
    }
    else if(event.target.label==="Email ID"){
        this.emailid = event.target.value;
    }
    else if(event.target.label==="Address Line 1"){
        this.addline1 = event.target.value;
    }
    else if(event.target.label==="Address Line 2"){
        this.addline2 = event.target.value;
    }
    else if(event.target.label==="Zipcode"){
        this.zipcode = event.target.value;
    }
    else if(event.target.label==="City"){
        this.city = event.detail.value;
    }
    else if(event.target.label==="County"){
        this.county = event.detail.value;
    }
    else if(event.target.label==="State"){
        this.state = event.detail.value;
    }
    else if(event.target.label==="Country"){
        this.country = event.detail.value;
    }
    else if(event.target.label==="Fax Number"){
        this.faxnum = event.target.value;
    }

}
createrec(){
    const fields = {};

    fields[PHONE_DETAILS.fieldApiName] = this.phonenumb;
    fields[EMAIL_DETAILS.fieldApiName] = this.emailid;
    fields[ADD1_DETAILS.fieldApiName] = this.addline1;
    fields[ADD2_DETAILS.fieldApiName] = this.addline2;
    fields[ZIPCODE_DETAILS.fieldApiName] = this.zipcode;
    fields[CITY_DETAILS.fieldApiName] = this.city;
    fields[COUNTY_DETAILS.fieldApiName] = this.county;
    fields[COUNTRY_DETAILS.fieldApiName] = this.country;
    fields[STATE_DETAILS.fieldApiName] = this.state;
    fields[FAXNUM_DETAILS .fieldApiName] = this.faxnum;
   


    const recordInput = { apiName: CONTACT_DETAILS.objectApiName, fields };
    console.log(fields);
    

    createRecord(recordInput)
        .then(res => {
            console.log('Your record was successfully created' +res.id);
            this.conId = res.id;
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Contact Created. Record Id is ' + this.conId ,
                    variant: 'Success',
                }),
            ); 
            const sevent = new CustomEvent('con', {detail:this.conId });
            this.dispatchEvent(sevent);
           
            
        })   
        .catch(error=>{
            console.log('Your record creation failed' + error.body.message);
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error creating record',
                    message: 'Error while creating',
                    variant: 'error',
                }),
            );
        });     


}
gotostud(){
    this.prevval = 'step-1';
    const sevent = new CustomEvent('con', {detail: this.prevval});
    this.dispatchEvent(sevent);    
}

navigateToObjectHome() {
    console.log('inside navigation block');
    this[NavigationMixin.Navigate]({
        type: 'comm__namedPage',
        attributes: {
            name: 'Home'
        }
    });
}
}