 Ext.define('FormInput.view.main.MainBorder', {
     extend: 'Ext.panel.Panel',
     xtype: 'app-mainBorder',
     scrollable: true,

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
       items:
           [
                {
                    xtype: 'NewsInputBase',
                    flex: 1,
                }
           ],
            

     },
     {
       title: 'Recent Posts',
       region: 'center',
       scrollable: true,
       id: 'recPost',
       
         items:
             [
                 {
                     xtype: 'panel',
                     id: 'postItem',
                     html: '<h1>Some Post</H1><br><h2>Post Title</h2><br><h3>TexttextTexttextTexttext<br>TexttextTexttext</h3>', 
                 }
             ]

     },
     {
         xtype: 'panel',
         region: 'east',
         minWidth: 200,
         maxWidth: 200,
         title: 'Info',
         flex: 0.2,
         collapsible: true,
         split: true,
         titleCollapse: true,
         collapsed: true,
         html: '<h3>Some informations...<br>Some other lines...</h3>dfjkgjhgjkjhjhjh<br>kjusdhgheg',
         
     }

   ]
 });