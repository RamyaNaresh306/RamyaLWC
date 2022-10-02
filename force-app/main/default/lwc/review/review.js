import { LightningElement,api } from 'lwc';

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

import COURSENAME_DETAILS from '@salesforce/schema/Course_Details__c.Course_Name__c';
import COURSEID_DETAILS from '@salesforce/schema/Course_Details__c.Course_ID__c';
import COURSTRDATE_DETAILS from '@salesforce/schema/Course_Details__c.Course_Start_Date__c';
import COURENDDATE_DETAILS from '@salesforce/schema/Course_Details__c.Course_End_Date__c';
import COURFEE_DETAILS from '@salesforce/schema/Course_Details__c.Course_Fee__c';
import YROFEXP_DETAILS from '@salesforce/schema/Course_Details__c.Year_of_Experience__c';
import CLIENTNAME_DETAILS from '@salesforce/schema/Course_Details__c.Client_Name__c';
import COMPCOURS_DETAILS from '@salesforce/schema/Course_Details__c.Completed_Courses__c';
import ADDCOMM_DETAILS from '@salesforce/schema/Course_Details__c.Additional_Comments__c';

import PAYMETH_DETAILS from '@salesforce/schema/Payment_Details__c.Payment_Method__c';
import PAYTYPE_DETAILS from '@salesforce/schema/Payment_Details__c.Payment_Type__c';
import FIRSTNAM_DETAILS from '@salesforce/schema/Payment_Details__c.First_Name__c';
import LASTNAM_DETAILS from '@salesforce/schema/Payment_Details__c.Last_Name__c';
import CARDNUM_DETAILS from '@salesforce/schema/Payment_Details__c.Card_Number__c';
import RECARDNUM_DETAILS from '@salesforce/schema/Payment_Details__c.Re_Enter__c';
import EXPDATE_DETAILS from '@salesforce/schema/Payment_Details__c.Expiry_Date__c';
import CVV_DETAILS from '@salesforce/schema/Payment_Details__c.CVV__c';
import TOTAMT_DETAILS from '@salesforce/schema/Payment_Details__c.Total_Amount__c';
import BILLADD_DETAILS from '@salesforce/schema/Payment_Details__c.Billing_Address__c';

import { NavigationMixin } from 'lightning/navigation';


export default class Review extends NavigationMixin(LightningElement) {
 @api stud = '';
 @api cont = '';
 @api cour = '';
 @api pay = '';


 activeSections = [];

 firstname = FIRSTNAME_field;
 middlename = MIDDLENAME_field;
 lastname = LASTNAME_field;
 DOB = DOB_field;
 gender = GENDER_field;
 doctyp = DOCTYPE_field;
 docnum = DOCNUMB_field;
 confirdoc = CONFIRMDOCNUM_field;
 ugpercent = UGPERCENT_field;
 univ = UNIV_field;
 yearofgrad = YEAROFGRAD_field;


 phone = PHONE_DETAILS;
 email = EMAIL_DETAILS;
 add1 = ADD1_DETAILS;
 add2 = ADD2_DETAILS;
 zipcode = ZIPCODE_DETAILS;
 city = CITY_DETAILS;
 county = COUNTY_DETAILS;
 country = COUNTRY_DETAILS;
 state = STATE_DETAILS;
 faxnum = FAXNUM_DETAILS;

 cournam = COURSENAME_DETAILS;
 courid = COURSEID_DETAILS;
 courstdat = COURSTRDATE_DETAILS;
 courenddat = COURENDDATE_DETAILS;
 courfee = COURFEE_DETAILS;
 yrofexp = YROFEXP_DETAILS;
 clientnam = CLIENTNAME_DETAILS;
 compcour = COMPCOURS_DETAILS;
 addcom = ADDCOMM_DETAILS;

 paymeth = PAYMETH_DETAILS;
 paytyp = PAYTYPE_DETAILS;
 firtnam = FIRSTNAM_DETAILS;
 lastnam = LASTNAM_DETAILS;
 cardnum = CARDNUM_DETAILS;
 recardnum = RECARDNUM_DETAILS;
 expdate = EXPDATE_DETAILS;
 cvv = CVV_DETAILS;
 totamt = TOTAMT_DETAILS;
 billadd = BILLADD_DETAILS;


gotostud(){
    this.prevval = 'step-4';
    const sevent = new CustomEvent('rev', {detail: this.prevval});
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