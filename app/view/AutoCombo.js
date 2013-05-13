Ext.define('Ext.view.AutoCombo',{
    extend: 'Ext.form.field.ComboBox',
    xtype: 'autocombo',
    displayField: 'label',
    valueField: 'id',
    queryMode: 'local',
    typeAhead: true,
    minChars: 2,
    triggerAction: 'all'
});