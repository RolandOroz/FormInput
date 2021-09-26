Ext.define('FormInput.controller.Main', {
    extend: 'Ext.app.Controller',

    models:
        [
            'FormInput.model.Post'
        ],

    stores:
        [
            'FormInput.store.PostApi'
        ],

    views:
        [
            'FormInput.view.main.PostGrid',
            'FormInput.main.PostsForm'
        ],

        init: function(application) {
                this.control({
                    "postgrid": {
                        render : this.onGridRender,
                        itemdblclick : this.onEditClick
                    },
                    "postgrid button#add": {
                        click: this.onAddClick
                    }
                });
            },

            onGridRender: function(grid, eOpts) {
                grid.getStore().load();
            },

            onAddClick: function(btn, e, eOpts ){

                var editWin = Ext.create('FormInput.main.PostsForm');

                editWin.setTitle('Create New Content');
            },

            onEditClick: function( grid, record, item, index, e, eOpts ){

                var editWin = Ext.create('FormInput.main.PostsForm');

                editWin.setTitle('Update Content');
            }
});