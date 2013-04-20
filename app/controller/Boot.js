Ext.define('Ds.controller.Boot', {
    extend: 'Ext.app.Controller',
    init: function() {
        Ext.Loader.loadScript({
            url: 'datasets.js'
        });
        this.control({
            'viewport': {
                 render: function(){
                     console.log('viewport has rendered');
                 }
            },
            'viewport > panel': {
                 render: function(){
                     console.log('panels have rendered');
                 }
            },
            'treeview': {
                 itemmove: function(){
                     console.log('your dragging!!!');
                 },
                 nodedragover: function(target,p,dragData){
                        //offices are the only things that can get dropped nodes
                        if(target.raw.iconCls!=='icon-office'){
                            return false;
                        }
                 }
            }
            
        });
    }
});