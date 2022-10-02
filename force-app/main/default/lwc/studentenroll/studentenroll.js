import { LightningElement, track} from 'lwc';


export default class Studentenroll extends LightningElement {
    
    @track openprogind = true;
    @track openstudind = true;
    @track openconind = false;
    @track opencourind = false;
    @track openpayind = false;
    @track openrevind = false;
    


    @track progstepval = 'step-1' ; 
    studrec;
    conrec;
    conrec1;
    courrec;
    courrec1;
    payrec;
    payrec1;

    studchgval(event){
        this.studrec = event.detail;
        this.progstepval = 'step-2';
        this.openstudind = false;
        this.openconind = true;
    
    } 
    conchgval(event){
        this.conrec = event.detail;
        if(this.conrec === 'step-1'){
            this.progstepval = 'step-1';
            this.openstudind = true;
            this.openconind = false;
        }
        else{    
        this.conrec1 = this.conrec;
        this.progstepval = 'step-3';
        this.openstudind = false;
        this.openconind = false;
        this.opencourind = true;
        }
        

    } 
    courchgval(event){
        this.courrec = event.detail;
        if(this.courrec === 'step-2'){
            this.progstepval = 'step-2';
            this.openstudind = false;
            this.openconind = true;
            this.opencourind = false;
        }
        else{  
        this.courrec1 =  this.courrec    
        this.progstepval = 'step-4';
        this.openstudind = false;
        this.openconind = false;
        this.opencourind = false;
        this.openpayind = true;
        }
        

    } 
    paychgval(event){
        this.payrec = event.detail;
        if(this.payrec === 'step-3'){
            this.progstepval = 'step-3';
            this.openstudind = false;
            this.openconind = false;
            this.opencourind = true;
            this.openpayind = false;
        }
        else{  
        this.payrec1 = this.payrec;      
        this.progstepval = 'step-5';
        this.openstudind = false;
        this.openconind = false;
        this.opencourind = false;
        this.openpayind = false;
        this.openrevind = true;
        }
        

    } 
    revchgval(event){
        this.payrec = event.detail;       
        this.progstepval = 'step-4';
        this.openstudind = false;
        this.openconind = false;
        this.opencourind = false;
        this.openpayind = true;
        this.openrevind = false;
       
    }
   

}