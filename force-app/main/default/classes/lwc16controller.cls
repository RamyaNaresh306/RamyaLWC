public with sharing class lwc16controller {
    
    @AuraEnabled(cacheable=true)
    
    public static List<Account> getaccounts() {
       List<Account> acclist = [Select Id,Name,Industry from Account LIMIT 5];
       return acclist;
    }
}
