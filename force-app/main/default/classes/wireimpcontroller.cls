public with sharing class wireimpcontroller {
    @AuraEnabled(cacheable=true)
     
    public static String createnewcont(string fname, string lname, string email) {
        Contact c = new Contact();
        c.firstname = fname;
        c.lastname  = lname;
        c.email = email;
        insert c;
        return c.id;

    }
}
