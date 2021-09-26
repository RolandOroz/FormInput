 Ext.define('FormInput.view.main.MainBorder', {
     extend: 'Ext.panel.Panel',
     xtype: 'app-mainBorder',
     scrollable: true,
     title:'Rolly\'s App',
     layout: 'border',

     items: [

     {
       title: 'Editor',
       region: 'west',
       minWidth: 650,
       maxWidth: 650,       
       flex: 1,
       collapsible: true,
       split: true,
       titleCollapse: true,
       collapsed: true,
       scrollable: true,
       iconCls: 'fas fa fa-edit',
       items:
           [
                {
                    xtype: 'NewsInput',
                    flex: 1,
                }
           ],
            

     },
     {
       title: 'Recent Posts',
       region: 'center',
       scrollable: true,
       id: 'recPost',
       iconCls: 'fa fa-archive',
       xtype: 'panel',

         items:
             [
                 {
                     xtype: 'postGrid',

                 }
             ]

     },
     {
             xtype: 'panel',
             iconCls: 'fas fa fa-info-circle',
             fieldLabel: 'Info',
             name: 'infoTab',
             labelAlign: 'top',
             id: 'infoTab',
             title: 'INFO',
             height: 200,
             width: 400,
             layout: 'fit',
             region: 'east',
             minWidth: 200,
             maxWidth: 200,
             flex: 0.2,
             collapsible: true,
             split: true,
             titleCollapse: true,
             collapsed: true,
             html: 'Some Info',
     },

   ]
 });