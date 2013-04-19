Ext.define('Ds.model.Agent', {
	extend: 'Ext.data.Model',
	fields: ['id', 'parentId', 'name', 'desc']
/*
	proxy: {
		type: 'ajax',
		url: '/data/category',
		reader: {
			type: 'json',
			root: 'results'
		}
	}
*/
});
