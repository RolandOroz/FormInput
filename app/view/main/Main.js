/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('FormInput.view.main.Main', {
    extend: 'Ext.container.Viewport',
    xtype: 'app-mainView',
    scrollable: true,

    requires: [
        'Ext.*',
<<<<<<<< HEAD:app/view/main/Main.js
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'FormInput.view.LeftPanelSide',
        'FormInput.view.main.MainController',
        'FormInput.view.main.MainModel',
        'FormInput.view.main.PostGrid',
        'FormInput.view.main.PostGridMemoryType',
        'FormInput.main.PostsFormMemoryType',
        'FormInput.main.PostsForm',
========
       // 'Ext.plugin.Viewport',
        //'Ext.window.MessageBox',
       // 'FormInput.view.forms.NewsInput',
      //  'FormInput.view.main.MainController',
      //  'FormInput.view.main.MainModel',
>>>>>>>> 18de30478e1c6becee6f889c8291a6bb5a83c611:classic/src/view/main/Main.js

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
                title: '',

            },
            {
                xtype: 'app-mainBorder',
                region: 'center',
                scrollable: true,
            },
            {
                 xtype: 'panel',
                 region: 'south',
                 title: 'Footer',
            },

        ]
    });