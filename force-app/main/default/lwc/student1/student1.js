import { LightningElement } from 'lwc';

import STUDENT_DETAILS from '@salesforce/schema/Student_Details__c';

import FIRSTNAME_field from '@salesforce/schema/Student_Details__c.First_Name__c';
import MIDDLENAME_field from '@salesforce/schema/Student_Details__c.Middle_Name__c';
import LASTNAME_field from '@salesforce/schema/Student_Details__c.Last_Name__c';
import DOB_field from '@salesforce/schema/Student_Details__c.Date_of_Birth__c';
import GENDER_field from '@salesforce/schema/Student_Details__c.Gender__c';
import DOCTYPE_field from '@salesforce/schema/Student_Details__c.Document_Type__c';
import DOCNUMB_field from '@salesforce/schema/Student_Details__c.Document_Number__c';
import CONFIRMDOCNUM_field from '@salesforce/schema/Student_Details__c.Confirm_Document_Number__c';
import UGPERCENT_field from '@salesforce/schema/Student_Details__c.UG_Percentage__c';
import UNIV_field from '@salesforce/schema/Student_Details__c.University_Name__c';
import YEAROFGRAD_field from '@salesforce/schema/Student_Details__c.Year_of_Graduation__c';

import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Student extends LightningElement {

studId;

stepval = "step-1";

firstname ;
middlename ;
lastname ;
DOB;
gender ;
doctype ;
docnumb ;
confirmdocnum ;
ugpercent ;
univname;
yearofgrad ;
get options() {
    return [
        { label: 'Female', value: 'Female' },
        { label: 'Male', value: 'Male' }
        ,
    ];
}
get option1() {
    return [
        { label: 'Birth Certificate', value: 'Birth Certificate' },
        { label: 'Bachelor Degree', value: 'Bachelor Degree' }
        ,
    ];
}
handlechange(event){
        this.studId = undefined;
        if(event.target.label ==='First Name'){
            this.firstname = event.target.value;
        }
        else if(event.target.label==="Middle Name"){
            this.middlename = event.target.value;
        }
        if(event.target.label==="Last Name"){
            this.lastname = event.target.value;
        }
        else if(event.target.label==="Date of Birth"){
            this.DOB = event.target.value;
        }
        if(event.target.label==="Gender"){
            this.gender = event.detail.value;
        }
        else if(event.target.label==="Document Number"){
            this.docnumb = event.detail.value;
        }
        if(event.target.label==="Document Type"){
            this.doctype = event.target.value;
        }
        else if(event.target.label==="Confirm Document Number"){
            this.confirmdocnum = event.target.value;
        }
        if(event.target.label==="UG Percentage"){
            this.ugpercent = event.target.value;
        }
        else if(event.target.label==="University Name"){
            this.univname = event.target.value;
        }
        else if(event.target.label==="Year of Graduation"){
            this.yearofgrad = event.target.value;
        }
    
}
createrec(){
    const fields = {};

    fields[FIRSTNAME_field.fieldApiName] = this.firstname;
    fields[MIDDLENAME_field.fieldApiName] = this.middlename;
    fields[LASTNAME_field.fieldApiName] = this.lastname;
    fields[DOB_field.fieldApiName] = this.DOB;
    fields[GENDER_field.fieldApiName] = this.gender;
    fields[DOCTYPE_field.fieldApiName] = this.doctype;
    fields[DOCNUMB_field.fieldApiName] = this.docnumb;
    fields[CONFIRMDOCNUM_field.fieldApiName] = this.confirmdocnum;
    fields[UGPERCENT_field.fieldApiName] = this.ugpercent;
    fields[UNIV_field .fieldApiName] = this.univname;
    fields[YEAROFGRAD_field.fieldApiName] = this.yearofgrad;


    const recordInput = { apiName: STUDENT_DETAILS.objectApiName, fields };
    console.log(fields);
    

    createRecord(recordInput)
        .then(stud => {
            console.log('Your record was successfully created' +stud.name);
            this.studId = stud.name;
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Account Created',
                    variant: 'Success',
                }),
            );
            this.stepval = "step-2"
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


}

