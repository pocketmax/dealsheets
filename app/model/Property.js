Ext.define('Ds.model.Property', {
	extend: 'Ext.data.Model',
	fields: ['id', 'name', 'estTime','allocTime']
/*	
	proxy: {
		type: 'ajax',
		url: 'data/project',
		reader: {
			type: 'json',
			root: 'results'
		}
	}
*/
});
