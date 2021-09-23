Ext.define('FormInput.view.main.PostGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'postGrid',

    alias: 'widget.postgrid',
    controller: 'main',
    scrollable: true,
    autoScroll: true,



    flex: 1,
    layout: 'fit',

    store: 'FormInput.store.PostApi', // {type:'postApi'}, //TODO: change store type for different use

  /*  store: Ext.create('Ext.data.Store', { // Some alternativ config if Uncaught TypeError: Cannot read property..
        model: 'FormInput.model.Post'
    }), */

    title: 'Post',
    iconCls: 'fa fa-list',

   /* itemConfig:
        {
            viewModel: true
        }, */

    columns:

    [

        {

            text: 'Id',
            dataIndex: 'id',
            width: 100,


        },
        {

            text: 'Title',
          //  dataIndex: 'newstitle', //TODO:uncomment to load real Post layout
            dataIndex: 'title', //TODO: delete to load real Post layout
            width: 250,

            editable: true,



        },
        {
          // text: 'Date', //TODO:uncomment to load real Post layout
            text: 'UserId', //TODO: delete to load real Post layout
          //  dataIndex: 'cdate', //TODO:uncomment to load real Post layout
            dataIndex: 'userId', //TODO: delete to load real Post layout
            width: 150,

        },
        {
            text: 'Content',
          //  dataIndex: 'fpost', //TODO:uncomment to load real Post layout
            dataIndex: 'body', //TODO: delete to load real Post layout
          //  sortable: false,
            width: 600,
            flex: 1,


        }
    ],

    dockedItems:
        [
            {
                xtype: 'toolbar',
                dock: 'top',
                items:
                    [
                        {
                            xtype: 'button',
                            text: 'Post',
                            itemId: 'add',
                            iconCls: 'fa fa-plus',
                            style:
                                {
                                    background: '#EEF9EA',
                                }

                        },
                        {
                            xtype: 'button',
                            text: 'Post',
                            itemId: 'delete',
                            iconCls: 'fa fa-minus',
                            displayInfo: true,
                            style:
                                {
                                    background: '#F9ECEC',
                                }


                        }
                    ]
            },
            {
                xtype: 'pagingtoolbar',
                store: 'FormInput.store.PostApi',
                dock: 'top',
                displayInfo: true,
                emptyMsg: 'Nothing to Display'
            }
        ]

});