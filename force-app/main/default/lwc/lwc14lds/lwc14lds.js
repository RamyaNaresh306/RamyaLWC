import { LightningElement, api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import IND_FIELD from '@salesforce/schema/Account.Industry';
export default class Lwc14lds extends LightningElement {
    @api recordId;
    
    name = NAME_FIELD;
    ind = IND_FIELD;
}