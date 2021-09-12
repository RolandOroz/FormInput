Ext.define('FormInput.view.forms.NewsInput', {
    extend: 'Ext.container.Container',
    xtype: 'NewsInputBase',

    style: 'margin: 50px',
    title: 'News Input',
    scrollable: true,
    layout: 'fit',

    items:
        [
            {
                xtype: 'container',
                layout: 'hbox',
                scrollable: true,

                
                items:
                    [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'First Name',
                            name: 'First Name',
                            labelAlign: 'top',
                            cls: 'field-margin',
                            flex: 1,
                            id: 'firstName',
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Last Name',
                            text: 'hjgs',
                            name: 'LastName',
                            labelAlign: 'top',
                            cls: 'field-margin',
                            flex: 1,
                            id: 'lastName',
                        },
                                                                        
                    ]
                        
            },
            {
                xtype: 'container',
                layout: 'column',
                scrollable: true,
                items:
                    [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Email Address',
                            name: 'EmailAddress',
                            labelAlign: 'top',
                            cls: 'field-margin',
                            columnWidth: 0.6,
                            id: 'email',
                        },
                        {
                            xtype: 'datefield',
                            fieldLabel: 'Date',
                            name: 'Date',
                            labelAlign: 'top',
                            cls: 'field-margin',
                            columnWidth: 0.4,
                            id: 'dateForm',
                        },
                        {
                            xtype: 'htmleditor',                                                      
                            name: 'Post',
                            fieldLabel: 'Post',
                            labelAlign: 'top',
                            cls: 'field-margin',
                            columnWidth: 1,
                            width: 400,
                            height: 800,
                            fieldBodyCls: 'editorText',
                            enableColors: true,
                            enableFont: true,
                            enableFontSize: true,
                            enableFormat: true,
                            enableLinks: true,
                            enableLists: true,
                            enableSourceEdit: true,
                            id: 'htmlEditorText',
                            scrollable: true,
                            
                        },
                        
                    ]
            },
        ]
            
});