Ext.define('Ds.model.Org', {
	extend: 'Ext.data.Model',
	fields: ['id', 'parentId', 'userId', 'desc', 'postDateTime']
/*
	proxy: {
		type: 'ajax',
		url: '/data/taskentry',
		reader: {
			type: 'json',
			root: 'results'
		}
	}
*/
});
