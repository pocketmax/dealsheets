Ext.define('Ds.model.Seller', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name']
/* 
    proxy: {
        type: 'ajax',
        url: '/data/user',
        reader: {
            type: 'json',
            root: 'results'
        }
    }
*/
});
