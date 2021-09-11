/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('FormInput.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'FormInput.view.main.MainController',
        'FormInput.view.main.MainModel',
        'FormInput.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    //ui: 'navigation',

    fullscreen: true,


        layout: 'border',

        items: [

            {
                xtype: 'panel',
                region: 'north',
                title: 'Rolly\s App',

            },
            {
                xtype: 'app-mainBorder',
                region: 'center',

            },
            {
                 xtype: 'panel',
                 region: 'south',
                 title: 'Footer',
            },
            {
                xtype: 'panel',
                region: 'east',
                title: 'Info',
                flex: 0.1,
                collapsible: true,
                split: true,
                titleCollapse: true,
                collapsed: true,
            }
        ]
    });
