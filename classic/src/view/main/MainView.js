	/*
	just saved as an exmpl


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
	extend: 'Ext.Container',
	xtype: 'mainview',
	controller: 'mainviewcontroller',
	viewModel: {
		type: 'mainviewmodel'
	},
  requires: [
    'Ext.layout.Fit'
  ],
	layout: 'fit',
	items: [
		{ xtype: 'navview',    reference: 'navview',    docked: 'left',   bind: {width:  '{navview_width}'}, listeners: { select: "onMenuViewSelectionChange"} },
		{ xtype: 'headerview', reference: 'headerview', docked: 'top',    bind: {height: '{headerview_height}'} },
		{ xtype: 'footerview', reference: 'footerview', docked: 'bottom', bind: {height: '{footerview_height}'} },
		{ xtype: 'centerview', reference: 'centerview' },
		{ xtype: 'detailview', reference: 'detailview', docked: 'right',  bind: {width:  '{detailview_width}'}  },
	]
});
*/