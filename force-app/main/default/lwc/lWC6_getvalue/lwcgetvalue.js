import { LightningElement } from 'lwc';

export default class Lwcgetvalue extends LightningElement {
    empname = "Ramya";
    empaddr = "no.10 windsor avenue";
    empsal = 3000;
    empbonus;
    getval(event){
        const n = event.target.name;
        if(n=="ename"){
            this.empname = event.target.value;
            console.log("Employee name entered is "+this.empname);
        }
        else if(n=="eaddr"){
            this.empaddr = event.target.value;
            console.log("Employee address entered is "+this.empaddr);
        }
        else if(n=="esal"){
            this.empsal = event.target.value;
            console.log("Employee salary entered is "+this.empsal);
        }
    }
    calcbonus(){
        this.empbonus = this.empsal * 2;
        
    }
}