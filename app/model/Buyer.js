Ext.define('Ds.model.Buyer', {
	extend: 'Ext.data.Model',
	fields: [{
		name: 'id',
	},{
		name: 'text',
		mapping: 'name'
	},{
		name: 'leaf',
		type: 'boolean',
		defaultValue: false
	},{
		name: 'iconCls',
		convert: function(val, rec){
			var cat = Tyi.IdInfo.fetchType(rec.get('id')).type;
			if( cat == 'project' ){
				return 'icon-project';
			} else {
				return 'icon-task';
			}
		}
	}]
});
