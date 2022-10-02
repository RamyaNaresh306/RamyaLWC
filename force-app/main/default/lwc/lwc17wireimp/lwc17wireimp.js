import { LightningElement, wire } from 'lwc';
import createcont from '@salesforce/apex/wireimpcontroller.createnewcont';
export default class Lwc17wireimp extends LightningElement {
    fn;
    ln;
    em;
    recordId;
    error;

    getevent(event){
        const n = event.target.name;
        if(n == "fname"){
            this.fn = event.target.value;
            console.log(this.fn);
        }
        else if(n == "lname"){
            this.ln = event.target.value;
            console.log(this.ln);
        }
        else if(n == "email"){
            this.em = event.target.value;
            console.log(this.em);
        }

    }

    createcontact(){
        createcont({fname: this.fn,lname: this.ln, email: this.em })
            .then((result) => {
                this.recordId = result;
                console.log('the record id is'+ result);
            })
            .catch((error) => {
                this.error = error;
                console.log('error occured' + this.error);
            });
        }
}
