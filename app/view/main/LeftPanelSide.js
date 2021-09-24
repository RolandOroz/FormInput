Ext.define('FormInput.view.LeftPanelSide', {
    extend: 'Ext.container.Container',
    xtype: 'leftPanelSide',

    style: 'margin: 50px',
    title: 'Left Panel',
    scrollable: true,
    layout: 'fit',
    id: 'leftpanelside',
    name: 'leftpanelside',

    items:
        [
            {
                xtype: 'panel',
                layout: 'fit',
                scrollable: true,



                items:
                    [
                        {
                            xtype: 'panel',
                            fieldLabel: 'Screen',
                            name: 'screen',
                            labelAlign: 'top',
                            cls: 'field-margin',
                        },
                    ]

            },

        ]

});