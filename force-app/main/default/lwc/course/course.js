import { LightningElement } from 'lwc';

import COURSE_DETAILS from '@salesforce/schema/Course_Details__c';

import COURSENAME_DETAILS from '@salesforce/schema/Course_Details__c.Course_Name__c';
import COURSEID_DETAILS from '@salesforce/schema/Course_Details__c.Course_ID__c';
import COURSTRDATE_DETAILS from '@salesforce/schema/Course_Details__c.Course_Start_Date__c';
import COURENDDATE_DETAILS from '@salesforce/schema/Course_Details__c.Course_End_Date__c';
import COURFEE_DETAILS from '@salesforce/schema/Course_Details__c.Course_Fee__c';
import YROFEXP_DETAILS from '@salesforce/schema/Course_Details__c.Year_of_Experience__c';
import CLIENTNAME_DETAILS from '@salesforce/schema/Course_Details__c.Client_Name__c';
import COMPCOURS_DETAILS from '@salesforce/schema/Course_Details__c.Completed_Courses__c';
//import PAYMENT_DETAILS from '@salesforce/schema/Course_Details__c.Payment_Details__c';
import ADDCOMM_DETAILS from '@salesforce/schema/Course_Details__c.Additional_Comments__c';

import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class Course extends NavigationMixin(LightningElement) {

courId;
prevval;

crname;
crID;
crstrdate;
crenddate;
crfee;
yrofexp;
clientnme;
compcr;
//payment;
addcomm;

handlechange(event){
    this.courId = undefined;
    if(event.target.label ==='Course Name'){
        this.crname = event.target.value;
    }
    else if(event.target.label==="Course ID"){
        this.crID = event.target.value;
    }
    else if(event.target.label==="Course Start Date"){
        this.crstrdate = event.target.value;
    }
    else if(event.target.label==="Course End Date"){
        this.crenddate = event.target.value;
    }
    else if(event.target.label==="Course Fee"){
        this.crfee = event.target.value;
    }
    else if(event.target.label==="Year of Experience"){
        this.yrofexp = event.target.value;
    }
    else if(event.target.label==="Client Name"){
        this.clientnme = event.target.value;
    }
    else if(event.target.label==="Completed Courses"){
        this.compcr = event.target.value;
    }
    /*else if(event.target.label==="Payment Detail"){
        this.payment = event.target.value;
    }  */
    else if(event.target.label==="Additional Comments"){
        this.addcomm = event.target.value;
    }
}

createrec(){
    const fields = {};

    fields[COURSENAME_DETAILS.fieldApiName] = this.crname;
    fields[COURSEID_DETAILS.fieldApiName] = this.crID;
    fields[COURSTRDATE_DETAILS.fieldApiName] = this.crstrdate;
    fields[COURENDDATE_DETAILS.fieldApiName] = this.crenddate;
    fields[COURFEE_DETAILS.fieldApiName] = this.crfee;
    fields[YROFEXP_DETAILS.fieldApiName] = this.yrofexp;
    fields[CLIENTNAME_DETAILS.fieldApiName] = this.clientnme;
    fields[COMPCOURS_DETAILS.fieldApiName] = this.compcr;
    //fields[PAYMENT_DETAILS.fieldApiName] = this.payment;
    fields[ADDCOMM_DETAILS .fieldApiName] = this.addcomm;
   


    const recordInput = { apiName: COURSE_DETAILS.objectApiName, fields };
    console.log(fields);
    
    createRecord(recordInput)
        .then(res1 => {
            console.log('Your record was successfully created' +res1.id);
            this.courId = res1.id;
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Course Created. Record Id is ' + this.courId ,
                    variant: 'Success',
                }),
            ); 
            const sevent = new CustomEvent('cour', {detail:this.courId });
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
gotocon(){
    this.prevval = 'step-2';
    const sevent = new CustomEvent('cour', {detail: this.prevval});
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