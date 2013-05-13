Ext.define('Ds.view.viewport.OrgTree', {
	extend: 'Ext.tree.Panel',
	title: 'company tree',
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            defaults: {
                width: 95,
                enableKeyEvents: true
            },
            items: ['Created Date','->',{
                xtype: 'datefield',
                name: 'createdFromDate',
                emptyText: 'from'
            },{
                xtype: 'datefield',
                name: 'createdToDate',
                emptyText: 'to'
            }]
        }],
        viewConfig: {
            plugins: {
                ptype: 'treeviewdragdrop',
                appendOnly: true,
                containerScroll: true
            }
        },
        store: new Ext.data.TreeStore({
            proxy: {
               type: 'rest',
               url: '/ds_ci/orgtree'
            },
            listeners: {
                beforeload: function(s,o,e){
                    s.getProxy().extraParams = {
                        nodeType: o.node.raw.nodeType,
                        nodeId: o.node.raw.nodeId
                    };
                }
            },
            root: {
                text: 'Company',
                iconCls: 'icon-corp',
                allowDrag: false,
                nodeId: 1,
                nodeType: 'corp'
            }
        })
});
