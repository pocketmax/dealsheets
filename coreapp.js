Ext.Loader.setConfig({
	enabled: true,
	paths: {
		Ds: ''
	}
});

Ext.stateIds = [
    'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA',
    'HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
    'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ',
    'NM','NY','NC','ND','OH','OK','OR','PA','RI','SC',
    'SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'
];

Ext.application({
	name: 'Ds',
	autoCreateViewport: true,
	models: ['Deal','Agent','Client','Office','Org','Property'],
        controllers: ['Boot'],
	launch: function() {

	}
});

