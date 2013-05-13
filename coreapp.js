
Ext.Loader.setConfig({
    enabled: true,
    paths: {
        Ds: ''
    }
});

Ext.stateIds = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];

Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));

//there is a bug in extjs 4.2.0 that stops cell editing if groupsummary plugin is used in a grid. This patches that until the next release.
Ext.define('Ext.grid.feature.GroupStoreOverride', {override: 'Ext.grid.feature.GroupStore', //TODO it will be in 4.2.1
    onUpdate: function(store, record, operation, modifiedFieldNames) {
        var me = this,
                groupInfo = me.groupingFeature.getRecordGroup(record),
                firstRec, lastRec;

        // The grouping field value has been modified.
        // This could either move a record from one group to another, or introduce a new group.
        // Either way, we have to refresh the grid
        if (store.isGrouped()) {
            if (modifiedFieldNames && Ext.Array.contains(modifiedFieldNames, me.groupingFeature.getGroupField())) {
                return me.onRefresh(me.store);
            }

            // Fire an update event on the collapsed group placeholder record
            if (groupInfo.isCollapsed) {
                me.fireEvent('update', me, groupInfo.placeholder);
            }

            // Not in a collapsed group, fire update event on the modified record
            // and, if in a grouped store, on the first and last records in the group.
            else {
                Ext.suspendLayouts();

                // Propagate the record's update event
                me.fireEvent('update', me, record, operation, modifiedFieldNames);

                // Fire update event on first and last record in group (only once if a single row group)
                // So that custom header TPL is applied, and the summary row is updated
                firstRec = groupInfo.children[0];
                lastRec = groupInfo.children[groupInfo.children.length - 1];

                // Do not pass modifiedFieldNames so that the TableView's shouldUpdateCell call always returns true.
                if (firstRec !== record) {
                    me.fireEvent('update', me, firstRec, 'edit');
                }
                if (lastRec !== record && lastRec !== firstRec) {
                    me.fireEvent('update', me, lastRec, 'edit');
                }
                Ext.resumeLayouts(true);
            }
        } else {
            // Propagate the record's update event
            me.fireEvent('update', me, record, operation, modifiedFieldNames);
        }
    }

});

Ext.application({
    name: 'Ds',
    autoCreateViewport: true,
    controllers: ['Boot'],
    launch: function() {
        Ds.socket = io.connect('http://' + location.hostname + ':81');
        Ds.socket.on('ds', function(msg) {
            var grid = Ext.ComponentQuery.query('grid')[0];
            var store = grid.getStore();
            var record = store.getById(msg.data.deal_id);
            record.set(msg.data.field, msg.data.value);
            Ds.app.controllers.items[0].reloadPie();
        });
    }
});

