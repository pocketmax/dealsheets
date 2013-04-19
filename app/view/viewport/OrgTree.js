Ext.define('Ds.view.viewport.OrgTree', {
	extend: 'Ext.tree.Panel',
	title: 'org tree',
    initComponent: function() {
        Ext.apply(this, {
			store: new Ext.data.TreeStore({
                root: {
                    text: 'Company',
                    id: 'src',
                    expanded: true,
					children: [{
						text: 'PHX'
					}]
                }
            })
        });
        this.callParent();
    }
});
