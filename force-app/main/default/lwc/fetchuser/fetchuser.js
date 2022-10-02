import { LightningElement, track, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import a_NAME_Ref from '@salesforce/schema/User.Name';

import a_User_Id from '@salesforce/user/Id';

export default class Fetchuser extends LightningElement {

    @track a_User_Name;
     @track a_Error;
 
    @wire(getRecord, {
        recordId: a_User_Id,
        fields: [a_NAME_Ref]
    }) wireuser({
        error,
        data
    }) {
        if (error) {
           this.error = error ; 
        } else if (data) {
            this.a_User_Name = data.fields.Name.value;
        }
    }
}
