Ext.define('Ds.model.Deal', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id', type: 'int'
    },{
        name: 'seller_price', type: 'float'
    },{
        name: 'deal_stage'        
    },{
        name: 'created_date', type: 'date', dateFormat: 'Y-m-d'
    },{
        name: 'buyer_id'
    },{
        name: 'buyer_first_name'
    },{
        name: 'buyer_last_name'
    },{
        name: 'buyer_company_name'
    },{
        name: 'buyer_label'
    },{
        name: 'owner_id'
    },{
        name: 'owner_first_name'
    },{
        name: 'owner_last_name'
    },{
        name: 'owner_company_name'
    },{
        name: 'owner_label',
        convert: function(v,r){
            var firstName = r.get('owner_first_name');
            var lastName = r.get('owner_last_name');
            var companyName = r.get('owner_company_name');

            if( companyName ){
                return companyName;
            } else if( firstName && lastName ){
                return lastName + ', ' + firstName;
            } else {
                return lastName + firstName;                
            }
        }
    },{
        name: 'agent_id'
    },{
        name: 'agent_first_name'
    },{
        name: 'agent_last_name'
    },{
        name: 'agent_label', type: 'string'
    },{
        name: 'agent_title'
    },{
        name: 'agent_phone_number', type: 'string'
    },{
        name: 'acres', type: 'int'
    },{
        name: 'appraised_value', type: 'float'
    }]
});

