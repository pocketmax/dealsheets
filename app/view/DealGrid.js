Ext.define('Ds.view.DealGrid', {
    extend: 'Ext.grid.Panel',
    requires: ['Ds.model.Deal', 'Ds.model.Agent', 'Ds.model.Client', 'Ds.view.AutoCombo'],
    xtype: 'mydealgrid',
    selModel: {
        selType: 'cellmodel'
    },
    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 2
    },
    features: [{
            id: 'group',
            ftype: 'groupingsummary',
            hideGroupedHeader: false,
            enableGroupingMenu: true,
            groupHeaderTpl: Ext.create('Ext.XTemplate', "<tpl if=\"groupField == \'created_date\'\">{columnName}: {name:this.formatDate}<tpl else>{columnName}: {name}</tpl>", {
                formatDate: function(val) {
                    if(!val){
                        return 'blank';
                    }
                    return Ext.Date.format(new Date(val), 'm-d-Y' );
                }
            })
    }],
    store: {
        model: 'Ds.model.Deal',
        remoteFilter: true,
        proxy: {
            type: 'rest',
            url: '/ds_ci/dealgrid'
        }
    },
    viewConfig: {
        getRowClass: function(rec) {
            if( rec.data.acres < 10 ) {                
                return 'acres-bad-cell';
            }
        }
    },
    columns: [{
            text: 'Deal ID',
            dataIndex: 'id'
        }, {
            text: 'Owner',
            dataIndex: 'buyer_label'
        }, {
            text: 'Sell Price',
            dataIndex: 'seller_price',
            summaryType: 'sum',
            renderer: Ext.util.Format.usMoney,
            summaryRenderer: function(value) {
                return '<b>' + Ext.util.Format.usMoney(value, '0,000') + '</b>';
            },
            editor: {
                xtype: 'numberfield',
                allowBlank: false
            }
        }, {
            text: 'Deal Stage',
            dataIndex: 'deal_stage',
            editor: {
                xtype: 'combo',
                displayField: 'val',
                valueField: 'val',
                store: {
                    type: 'array',
                    fields: ['val'],
                    data: [
                        ['OPENED'],
                        ['OFFERED'],
                        ['CLOSED']
                    ]
                }
            }
        }, {
            text: 'Created Date',
            dataIndex: 'created_date',
            renderer: Ext.util.Format.dateRenderer('m-d-Y'),
            editor: {
                xtype: 'datefield',
                format: 'm-d-Y'
            }
        }, {
            text: 'Property Acres',
            tdCls: 'acres-cell',
            dataIndex: 'acres',
            summaryType: 'sum',
            summaryRenderer: function(value) {
                return '<b>' + Ext.util.Format.number(value, '0,000') + ' Acres</b>';
            },
            renderer: Ext.util.Format.numberRenderer('0,000'),
            editor: {
                xtype: 'numberfield',
                allowBlank: false
            }
        }, {
            text: 'Appraised Value',
            dataIndex: 'appraised_value',
            summaryType: 'sum',
            renderer: Ext.util.Format.usMoney,
            summaryRenderer: function(value) {
                return '<b>' + Ext.util.Format.usMoney(value) + '</b>';
            },
            editor: {
                xtype: 'numberfield',
                allowBlank: false
            }
        }, {
            text: 'Agent',
            dataIndex: 'agent_label',
            flex: 1,
            renderer: function(value, metaData, record, rowIndex, colIndex, store) {
                return "<img style='padding-right: 5px; width: 60px; float: left;' src='/dealsheets/imgs/agents/" + record.data.agent_id + ".jpg'> " +
                        "<div style='font-weight: bolder; color: green;'>" + record.data.agent_label + "</div>" +
                        "<div>" + record.data.agent_title + "</div>" +
                        "<div>" + (record.data.agent_phone_number).replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3') + "</div>" +
                        "<br>";
            }
        }]
});
