import { LightningElement } from 'lwc';

export default class Animal extends LightningElement {
    name1 = 'Cat';
    originalage = 1;
    newage = 0;
    
    
    get age(){
        return this.originalage;
    }

    set age(value){
        if(value>20){
            console.log("Invalid age for a cat");
        }
        else 
        this.originalage = value;
    } 

    updateage(event){
        this.newage = event.target.value;
    }
    updateorgage(){
        this.age = this.newage;
    }
}