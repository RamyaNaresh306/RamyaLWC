import { LightningElement } from 'lwc';

export default class LWC8_Calc extends LightningElement {
    num1;
    num2;
    res;
    getval(event){
        const n = event.target.name;
        if(n == "n1"){
            this.num1 = event.target.value;
        }
        else if(n =="n2"){
            this.num2 = event.target.value;
        
        }

    }
    CalcAdd(){
        this.res = parseInt(this.num1) + parseInt(this.num2);
    }
}