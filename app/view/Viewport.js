Ext.define('Ds.view.Viewport', {
	extend: 'Ext.container.Viewport',
	requires: 'Ds.view.viewport.OrgTree',
	layout: {
		type: 'border'
	},
	items: [Ext.create('Ds.view.viewport.OrgTree',{
		region: 'west',
		width: 320,
                split: true
	}),Ext.create('Ds.view.viewport.Tabs',{
		region: 'center'
	})]
});
