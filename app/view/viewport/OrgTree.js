Ext.define('Ds.view.viewport.OrgTree', {
	extend: 'Ext.tree.Panel',
	title: 'company tree',
    initComponent: function() {
        Ext.apply(this, {
                viewConfig: {
                    plugins: {
                        ptype: 'treeviewdragdrop',
                        appendOnly: true,
                        containerScroll: true
                    }
                },
		store: new Ext.data.TreeStore({
                    root: {
                    text: 'Company',
                    id: 'src',
                    iconCls: 'icon-corp',
                    draggable: false,
                    expanded: true,
			children: [{
                            text: 'Phoenix, AZ',
                            iconCls: 'icon-office',
                            officeId: 1,
                            expanded: true,
                            allowDrag: false,
                            children: [{
                                   text: 'Tom Adams',
                                   iconCls: 'icon-agent',
                                   agentId: 1,
                                   leaf: true
                            },{
                                   text: 'Ben Heglie',
                                   iconCls: 'icon-agent',
                                   agentId: 2,                              
                                   leaf: true
                            },{
                                   text: 'Ethan Granger',
                                   iconCls: 'icon-agent',
                                   agentId: 3,
                                   leaf: true
                            }]
                        },{
                            text: 'San Francisco, CA',
                            iconCls: 'icon-office',
                            officeId: 2,
                            allowDrag: false
                        },{
                            text: 'Dallas, TX',
                            iconCls: 'icon-office',
                            officeId: 3,
                            allowDrag: false
                        },{
                            text: 'Houston, TX',
                            iconCls: 'icon-office',
                            officeId: 4,
                            allowDrag: false
                        },{
                            text: 'Miami, FL',
                            iconCls: 'icon-office',
                            id: 5,
                            allowDrag: false
			}]
                    }
            })
        });
        this.callParent();
    }
});
