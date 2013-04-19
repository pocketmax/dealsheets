Ext.define('Ds.model.Deal', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id'
    },{
        name: 'buyerId'
    },{
        name: 'sellerId'
    },{
        name: 'agentId'        
    },{
        name: 'propertyId'
    },{
        name: 'sellerPrice'
    },{
        name: 'dealStage'
    },{
        name: 'createdDate'
    },{
        name: 'offeredDate'
    },{
        name: 'closedDate'
    }],
    validations: [{
        type: 'inclusion', field: 'dealStage', list: ['OPENED','OFFERED','CLOSED']
    }]
});
