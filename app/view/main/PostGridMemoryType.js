Ext.define('FormInput.view.main.PostGridMemoryType', {
    extend: 'Ext.grid.Panel',
    xtype: 'postGridMemoryType',

    alias: 'widget.postgridmemorytype',
    //controller: 'main',
    scrollable: true,
    autoScroll: true,

  /*  controllers:
        [
            'MainMemoryType',
        ],
    views:
        [
            'FormInput.model.Post'
        ],*/

    flex: 1,
    layout: 'fit',

    store:   {type:'postApi'},

    model: 'FormInput.model.Post',

    title: 'Post',
    iconCls: 'fa fa-list',

    itemConfig:
        {
            viewModel: true
        },

    columns:

    [

        {

            text: 'Id',
            dataIndex: 'id',
            width: 100,
            type: 'int',
        },
        {

            text: 'Title',
            dataIndex: 'newstitle',
            width: 250,
            type: 'string'
        },
        {
            text: 'Date',
            dataIndex: 'cdate',
            width: 150,
            xtype: 'datecolumn',
        },
        {
            text: 'Content',
            dataIndex: 'fpost',
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
                store: 'FormInput.store.Posts',
                dock: 'top',
                displayInfo: true,
                emptyMsg: 'Nothing to Display'
            }
        ]

});