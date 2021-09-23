Ext.define('FormInput.main.PostsForm', {
    extend: 'Ext.window.Window',
    alias: 'widget.postsform',

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
                                xtype: 'textfield',
                                fieldLabel: 'ID No',
                                name: 'id',
                                hidden: true,
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: 'UserId',
                                name: 'UserId',
                            },
                            {
                                xtype: 'textfield',
                                fieldLabel: 'Title',
                                name: 'title',
                                layyout: 'fit',
                            },
                            {
                                xtype: 'textareafield',
                                name: 'body',
                                fieldLabel: 'Content',
                                height: 20,

                            },
                        ]
            }
        ],

/* //TODO: uncomment below for real data

items:
        [
            {
                xtype: 'textfield',
                fieldLabel: 'ID No',
                name: 'id',
                id: 'id',
                labelAlign: 'top',
                cls: 'field-margin',
                flex: 1,
                hidden: false,
            },
            {
                xtype: 'textfield',
                fieldLabel: 'News Title',
                name: 'newstitle',
                labelAlign: 'top',
                cls: 'field-margin',
                flex: 1,
                id: 'newstitle',
                required: true,
            },
            {
                xtype: 'datefield',
                fieldLabel: 'Date',
                name: 'cdate',
                version: 4,
                labelAlign: 'top',
                cls: 'field-margin',
                flex: 1,
                id: 'cdate',
                // hidden: 'true',
            },
            {
                xtype: 'textarea',
                name: 'fPost',
                fieldLabel: 'Content',
                labelAlign: 'top',
                cls: 'field-margin',
                columnWidth: 1,
                //width: 200,
                //height: 800,
                fieldBodyCls: 'editorText',
                id: 'editorText',
                scrollable: true,
            },
        ] */
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
                        itemId: 'add',
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