Ext.define('FormInput.main.PostsFormMemoryType', {
    extend: 'Ext.window.Window',
    alias: 'widget.postsformmemorytype',

    height: 284,
    width: 400,
    layout: 'fit',
    iconCls:'fa fa-pencil',
    title: 'Edit/Create Content Form',
    titleAlign: 'center',
    autoShow: true,



    items:
        [
            {
                xtype: 'form',
                padding: 10,


                defaults:
                    {
                        anchor: '98%',
                    },
                    items:
                        [
                            {
                              //  xtype: 'hiddenfield',
                                xtype: 'textfield',
                                name: 'id',
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: 'News Title',
                                name: 'newstitle',
                            },
                            {
                                xtype: 'datefield',
                                fieldLabel: 'Date',
                                name: 'cdate',
                            },
                            {
                                xtype: 'textareafield',
                                fieldLabel: 'Content',
                                name: 'fpost',
                            },
                        ]
            }
        ],
    dockedItems:[
        {

            xtype:'toolbar',
            dock: 'bottom',
            layout:
                {
                    type: 'hbox',
                    pack: 'end',
                },

            items:
                [
                    {
                        xtype: 'button',
                        text: 'Cancel',
                        itemId: 'cancel',
                        iconCls: 'fa fa-ban',
                        flex: 1,
                        padding: 10,
                        style:
                            {
                                background: '#F6F6E6',
                            }
                    },
                    {
                        xtype: 'button',
                        text: 'Save',
                        itemId: 'save',    //'add'
                        iconCls: 'fa fa-check',
                        displayInfo: true,
                        flex: 1,
                        padding: 10,
                        style:
                            {
                                background: '#EEF9EA',
                            }
                    }
               ]

        }],
});