Ext.define('Ds.model.Office', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'id'
	},{
		name: 'name'
	},{
		name: 'estTime'
	},{
		name: 'allocTime'
	},{
		name: 'desc'
	},{
		name: 'dueDate'
	}],
	fooBar: function(){
	
	}
/*
	proxy: {
		type: 'ajax',
		method: 'POST',
		api: {
			load: '/data/task/fetch',
			create: '/data/task/create',
			destroy: '/data/task/delete',
			save: '/data/task/update'
		},
		reader: {
			type: 'json',
			root: 'results'
		}
	}
*/
});
