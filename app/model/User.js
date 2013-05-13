Ext.define('Ds.model.User', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id'
    },{
        name: 'first_name'
    },{
        name: 'last_name'
    },{
        name: 'company_name'
    },{
        name: 'label',
        convert: function(v,r){
            var firstName = r.get('first_name');
            var lastName = r.get('last_name');
            var companyName = r.get('company_name');

            if( companyName ){
                return companyName;
            } else if( firstName && lastName ){
                return firstName + ' ' + lastName;
            } else {
                return lastName + firstName;                
            }        
        }        
    }]
});
