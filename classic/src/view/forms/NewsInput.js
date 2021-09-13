Ext.define('FormInput.view.forms.NewsInput', {
    extend: 'Ext.container.Container',
    xtype: 'NewsInputBase',

    style: 'margin: 50px',
    title: 'News Input',
    scrollable: true,
    layout: 'fit',
    id: 'newsInput',
    name: 'newsInput',

    items:
        [
            {
                xtype: 'container',
                layout: 'hbox',
                scrollable: true,
                required: true,

                
                items:
                    [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'First Name',
                            name: 'fName',
                            labelAlign: 'top',
                            cls: 'field-margin',
                            flex: 1,
                            id: 'firstName',
                            required: true,
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Last Name',
                            text: 'hjgs',
                            name: 'lName',
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
                            name: 'eAddress',
                            labelAlign: 'top',
                            cls: 'field-margin',
                            columnWidth: 0.6,
                            id: 'email',
                        },
                        {
                            xtype: 'datefield',
                            fieldLabel: 'Date',
                            name: 'fDate',
                            labelAlign: 'top',
                            cls: 'field-margin',
                            columnWidth: 0.4,
                            id: 'dateForm',
                        },
                        {
                            xtype: 'htmleditor',                                                      
                            name: 'fPost',
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
            
            
                {
                    xtype: 'button',
                    text: 'Submit',
                    shadow: true,
                    handler: function myFunction() {
                        // Get the value of the input field with id="firstName"
                        form = document.getElementById("newsInput");
                        //current Time and Date
                        let current = new Date();
                        let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
                        let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
                        let dateTime = cDate + ' ' + cTime;
                        
                        let text;
                        if ("newsInput") {
                            text = "Input submited at: " + dateTime + "with the value of:" + form;
                            
                        } else {
                            text = "Not submited";
                        }
                        document.getElementById("postItem").innerHTML = text;
                       
                    }
                }
            
        ]
            
});