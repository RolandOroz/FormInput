 Ext.define('FormInput.view.main.MainBorder', {
     extend: 'Ext.container.Container',
     xtype: 'app-mainBorder',


     layout: 'border',

     items: [

     {
       title: 'Editor',
       region: 'west',
       margins: '0 5 0 5',
       maxWidth: 900,

       flex: 1,
       collapsible: true,
       split: true,
       titleCollapse: true,
       collapsed: true,
     },
     {
       title: 'Recent Posts',
       region: 'center',
       items: [{
            xtype:'grid',
            html:'<h2>Post1</h2>',
       }]

     },

   ]
 });