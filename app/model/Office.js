Ext.define('Ds.model.Office', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'id',
                type: 'int'
	},{
		name: 'city'
	},{
		name: 'stateId'
	}],
        validations: [{
            type: 'inclusion', field: 'stateId', list: Ext.stateIds
        }]
    
});
