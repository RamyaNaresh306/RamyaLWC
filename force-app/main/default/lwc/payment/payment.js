import { LightningElement } from 'lwc';

import PAYMENT_DETAILS from '@salesforce/schema/Payment_Details__c';

import PAYMETH_DETAILS from '@salesforce/schema/Payment_Details__c.Payment_Method__c';
import PAYTYPE_DETAILS from '@salesforce/schema/Payment_Details__c.Payment_Type__c';
import FIRSTNAME_DETAILS from '@salesforce/schema/Payment_Details__c.First_Name__c';
import LASTNAME_DETAILS from '@salesforce/schema/Payment_Details__c.Last_Name__c';
import CARDNUM_DETAILS from '@salesforce/schema/Payment_Details__c.Card_Number__c';
import RECARDNUM_DETAILS from '@salesforce/schema/Payment_Details__c.Re_Enter__c';
import EXPDATE_DETAILS from '@salesforce/schema/Payment_Details__c.Expiry_Date__c';
import CVV_DETAILS from '@salesforce/schema/Payment_Details__c.CVV__c';
import TOTAMT_DETAILS from '@salesforce/schema/Payment_Details__c.Total_Amount__c';
import BILLADD_DETAILS from '@salesforce/schema/Payment_Details__c.Billing_Address__c'; 

import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'; 
import { NavigationMixin } from 'lightning/navigation';


export default class Payment extends NavigationMixin(LightningElement) {

payId;
prevval;

paymethod;
paytype;
firstname;
lastname;
cardno;
recardno;
expdate;
cvv;
totamt;
billadd;

get options() {
    return [
        { label: 'Debit Card', value: 'Debit Card' },
        { label: 'Credit Card', value: 'Credit Card' },
        { label: 'Cash', value: 'Cash' }
        ,
    ];
}
get option1() {
    return [
        { label: 'Credit Card', value: 'Credit Card' },
        { label: 'Debit Card', value: 'Debit Card' },
        { label: 'Cash', value: 'Cash' }
        ,
    ];
} 

handlechange(event){
    this.payId = undefined;
    if(event.target.label ==='Payment Method'){
        this.paymethod = event.detail.value;
    }
    else if(event.target.label ==='Payment Type'){
        this.paytype = event.detail.value;
    }
    else if(event.target.label ==='First Name'){
        this.firstname = event.target.value;
    }
    else if(event.target.label ==='Last Name'){
        this.lastname = event.target.value;
    }
    else if(event.target.label ==='Card Number'){
        this.cardno = event.target.value;
    }
    else if(event.target.label ==='Re Enter Card Number'){
        this.recardno = event.target.value;
    }
    else if(event.target.label ==='Expiry Date'){
        this.expdate = event.target.value;
    }
    else if(event.target.label ==='CVV'){
        this.cvv = event.target.value;
    }
    else if(event.target.label ==='Total Amount'){
        this.totamt = event.target.value;
    }
    else if(event.target.label ==='Billing Address'){
        this.billadd = event.target.value;
    } 
}
createrec(){
    const fields = {};

    fields[PAYMETH_DETAILS.fieldApiName] = this.paymethod;
    fields[PAYTYPE_DETAILS.fieldApiName] = this.paytype;
    fields[FIRSTNAME_DETAILS.fieldApiName] = this.firstname;
    fields[LASTNAME_DETAILS.fieldApiName] = this.lastname;
    fields[CARDNUM_DETAILS.fieldApiName] = this.cardno;
    fields[RECARDNUM_DETAILS.fieldApiName] = this.recardno;
    fields[EXPDATE_DETAILS.fieldApiName] = this.expdate;
    fields[CVV_DETAILS.fieldApiName] = this.cvv;
    fields[TOTAMT_DETAILS.fieldApiName] = this.totamt;
    fields[BILLADD_DETAILS.fieldApiName] = this.billadd; 
   


    const recordInput = { apiName: PAYMENT_DETAILS.objectApiName, fields };
    console.log(fields);
    

    createRecord(recordInput)
        .then(res2 => {
            console.log('Your record was successfully created' +res2.id);
            this.payId = res2.id;
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Payment Created. Record Id is ' + this.payId ,
                    variant: 'Success',
                }),
            );             const sevent = new CustomEvent('pay', {detail:this.payId });
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
    this.prevval = 'step-3';
    const sevent = new CustomEvent('pay', {detail: this.prevval});
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