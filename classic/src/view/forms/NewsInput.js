Ext.define('FormInput.view.forms.NewsInput', {
    extend: 'Ext.form.Panel',
    xtype: 'NewsInput',

    style: 'margin: 50px',
    title: 'News Input',
    scrollable: true,
    flex: 1,
    id: 'newsInput',
    name: 'newsInput',

    items:
        [
            {
                xtype: 'form',
                layout: 'form',
                id:'addpost',
                scrollable: true,
                required: true,


                
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

                    ],
                    buttons:
                    [
                        {
                            text: 'Add Post',
                            handler: 'onAdd',
                            id: 'buttonadpost',
                            cls: 'field-margin',
                            //handler: 'addpost',
                            iconCls:'fas fa-check',
                            flex: 1,
                            handler: function(btn) {
                                var data = this.up('form');
                                console.log("print form data", data.getForm().getValues());
                            }
                        }
                    ]
                        
            },

            



        ]
            
});