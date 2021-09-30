Ext.define('FormInput.view.main.PostGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'postGrid',

    alias: 'widget.postgrid',
    controller: 'main',
    scrollable: true,
    autoScroll: true,
    flex: 1,
    layout: 'fit',
    store: {type:'postApi'},

    title: 'Post',
    iconCls: 'fa fa-list',

    model: 'FormInput.model.Post',

    columns:

    [

        {

            text: 'Id',
            dataIndex: 'id',
            width: 100,
           // editable: false,

        },
        {

            text: 'Title',
          //  dataIndex: 'newstitle',
            dataIndex: 'title',
            width: 250,





        },
        {
          // text: 'Date', //TODO:uncomment to load real Post layout
            text: 'UserId', //TODO: delete to load real Post layout
          //  dataIndex: 'cdate', //TODO:uncomment to load real Post layout
            dataIndex: 'userId', //TODO: delete to load real Post layout
            width: 150,
            type: 'int'

        },
        {
            text: 'Content',
          //  dataIndex: 'fpost', //TODO:uncomment to load real Post layout
            dataIndex: 'body', //TODO: delete to load real Post layout
          //  sortable: false,
            width: 600,
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