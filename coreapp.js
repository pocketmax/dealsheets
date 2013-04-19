Ext.Loader.setConfig({
	enabled: true,
	paths: {
		Ds: ''
	}
});

Ext.application({
	name: 'Ds',
	autoCreateViewport: true,
	models: ['Deal','Agent','Buyer','Office','Org','Property','Seller'],
	launch: function() {

	}
});

