public with sharing class lwc18controller {

    @AuraEnabled(cacheable=true)
   
    public static List<Contact> findContacts(String searchKey) {
        String key = '%' + searchKey + '%';
        return [
            SELECT Id, Name, Phone, Email
            FROM Contact
            WHERE Name LIKE :key 
            LIMIT 10
        ];

    }
}
