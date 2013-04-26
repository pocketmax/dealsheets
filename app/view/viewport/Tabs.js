Ext.define('Ds.view.viewport.Tabs', {
        requires: ['Ds.view.DealGrid','Ds.view.PortalPanel'],
        extend: 'Ext.tab.Panel',
	items: [{
            xtype: 'portalpanel',
            title: 'dashboard',
            items: [{
                id: 'col-1',
                items: [{
                    id: 'portlet-1',
                    title: 'Office chart',
                    html: 'component data goes here'
                },{
                    id: 'portlet-2',
                    title: 'Property chart',
                    html: 'component data goes here'
                }]
            },{
                id: 'col-2',
                items: [{
                    id: 'portlet-3',
                    title: 'pie chart - acres by deal stage',
                    items:[{
                        xtype: 'chart',
                        layout: 'fit',
                        height: 300,
                        animate: true,
                        store: Ext.create('Ext.data.JsonStore', {
                            fields: ['name', 'data']
                        }),
                        theme: 'Base:gradients',
                        series: [{
                            type: 'pie',
                            angleField: 'data',
                            showInLegend: true,
                            tips: {
                                trackMouse: true,
                                width: 170,
                                height: 28,
                                renderer: function(storeItem, item) {
                                    var total = 0;
                                    storeItem.store.each(function(rec) {
                                        total += rec.get('data');
                                    });
                                    this.setTitle(storeItem.get('name') + ': ' + Ext.util.Format.number(storeItem.get('data'),'0,000') + ' (' + Math.round(storeItem.get('data') / total * 100) + '%)');
                                }
                            },
                            highlight: {
                                segment: {
                                    margin: 20
                                }
                            },
                            label: {
                                field: 'name',
                                display: 'rotate',
                                contrast: true,
                                font: '18px Arial'
                            }
                        }]
                    }]
                }]
            },{
                id: 'col-3',
                items: [{
                    id: 'Office chart',
                    title: 'Stock Portlet',
                    html: 'component data goes here'
                }]
            }]
        }, {
            xtype: 'mydealgrid',
            title: 'deals',
            stateful: true,
            stateId: 'mydealgrid'
        }]
});
