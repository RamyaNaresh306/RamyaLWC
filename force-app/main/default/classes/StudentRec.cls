public with sharing class StudentRec {
    @AuraEnabled(cacheable = true)
    
    public static Student_Details__c GetStudent(string studrec) {
        Student_Details__c st = [select first_name__c from Student_Details__c where id = :studrec];
        return st;
    }
}
