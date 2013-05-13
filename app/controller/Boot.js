Ext.define('Ds.controller.Boot', {
    extend: 'Ext.app.Controller',
    reloadPie: function(records) {
        
        if(!records){
            console.log('no records so we will make some...');
            var grid = Ext.ComponentQuery.query('grid')[0];
            var store = grid.getStore();            
            records = store.data.items;
            console.log(records);
        }
        
        var pieChart = Ext.ComponentQuery.query('viewport chart')[0];
        var clumps = [];
        var storeData = [];
        for (i in records) {
            if (isNaN(clumps[records[i].data.deal_stage])) {
                clumps[records[i].data.deal_stage] = 0;
            }

            clumps[records[i].data.deal_stage] += records[i].data.acres;

        }
        for (i in clumps) {
            storeData[storeData.length] = {
                name: i,
                data: clumps[i]
            };
        }
        pieChart.getStore().loadData(storeData);
    },
    //collect date range and tree node info and refresh grid based on that criteria
    reloadGrid: function() {
        var grid = Ext.ComponentQuery.query('grid')[0];
        var store = grid.getStore();
        var query = Ext.ComponentQuery.query('viewport datefield[value!=]');
        var filterList = [];
        var treeNode = Ext.ComponentQuery.query('viewport treepanel')[0].getSelectionModel().getSelection()[0];
        store.filters.clear();

        for (i in query) {
            filterList[i] = {
                property: query[i].name,
                value: query[i].getSubmitValue()
            };
        }
        if (treeNode) {
            store.getProxy().extraParams = {
                nodeType: treeNode.raw.nodeType,
                nodeId: treeNode.raw.nodeId
            };
        }
        store.filter(filterList);
        store.on('load', function(st, records) {
            this.reloadPie(records);
            console.log('pie reloaded...');
            console.log(records);
        },this);
    },
    init: function() {
        this.control({
            'viewport datefield': {
                select: function(a, b) {
                    this.reloadGrid();
                },
                keydown: function(t, e) {
                    if (e.keyCode == e.ENTER) {
                        this.reloadGrid();
                    }
                }
            },
            'groupingsummary': {
                groupcollapse: function(view, node, group, eOpts) {
                    console.log(view);
                    console.log(node);
                    console.log(group);
                    console.log(eOpts);

                },
                groupexpand: function(view, node, group, eOpts) {
                    console.log(view);
                    console.log(node);
                    console.log(group);
                    console.log(eOpts);
                }
            },
            'grid': {
                edit: function(editor, e) {
                    
                    Ext.Ajax.request({
                        method: 'PUT',
                        url: '/ds_ci/dealgrid/',
                        params: {
                            deal_id: e.record.data.id,
                            field: e.field,
                            value: e.value
                        },
                        success: function() {
                            Ds.socket.emit('ds', {
                                data: {
                                    deal_id: e.record.data.id,
                                    field: e.field,
                                    value: e.value
                                }
                            });
                        }
                    });
                }
            },
            'treepanel': {
                select: function() {
                    this.reloadGrid();
                },
                nodedragover: function(target, p, dragData) {
                    //offices are the only things that can get dropped nodes
                    if (target.raw.iconCls !== 'icon-office') {
                        return false;
                    }
                },
                //when a tree node agent is dropped, send REST action to change it's office
                itemmove: function(target, p, dragData) {
                    Ext.Ajax.request({
                        method: 'PUT',
                        url: '/ds_ci/orgtree/',
                        params: {
                            parentNodeId: target.parentNode.raw.nodeId,
                            parentNodeType: target.parentNode.raw.nodeType,
                            nodeId: target.raw.nodeId,
                            nodeType: target.raw.nodeType
                        },
                        success: function() {
                        }
                    });
                }
            }

        });
    }
});
