Ext.define('FormInput.controller.MainMemoryType', {
    extend: 'Ext.app.Controller',
    alias: 'controller.mainmemorytype',

    models:
        [
            'FormInput.model.Post'
        ],

    stores:
        [
           'FormInput.store.Posts'
        ],

    views:
        [
            'FormInput.view.main.PostGridMemoryType',  //memory Type DB
            'FormInput.main.PostsFormMemoryType',
        ],

        init: function(application) {
                this.control({
                    "postgridmemorytype": {
                        render : this.onGridRender,
                        itemdblclick : this.onEditClick
                    },
                    "postgridmemorytype button#add": {
                        click: this.onAddClick
                    },
                    "postgridmemorytype button#delete": {
                        click: this.onDeleteClick
                    },
                    "postsformmemorytype button#cancel": {
                        click: this.onCancelClick
                    },
                    "postsformmemorytype button#save": {
                        click: this.onSaveClick
                    },
                });
            },

            onGridRender: function(grid, eOpts) {
                grid.getStore().load();
            },

            openForm: function(title){

                var editorWin = Ext.create('FormInput.main.PostsFormMemoryType');

                editorWin.setTitle(title);

                return editorWin;
            },

            onAddClick: function(btn, e, eOpts ) {

                this.openForm('Create New Content');
            },

            onEditClick: function( grid, record, item, index, e, eOpts ) {

                var editorWin = this.openForm('Update  # ID ' + record.get('id'));

                var form = editorWin.down('form');

                form.loadRecord(record);
            },

            onCancelClick: function(btn, e, eOpts ) {

                var editorWin = btn.up('window');

                var form = editorWin.down('form');

                form.getForm().reset();

                editorWin.close();

            },

            onDeleteClick: function(btn, e, eOpts ) {

                var grid = btn.up('grid');

                var selectedRecords = grid.getSelectionModel().getSelection();

                var gridStore = grid.getStore();

                gridStore.remove(selectedRecords);

                gridStore.sync();
            },

            onSaveClick: function(btn, e, eOpts ) {

                var editorWin = btn.up('window'),

                    form = editorWin.down('form'),

                    formValues = form.getValues(),

                    record = form.getRecord(),

                    grid = Ext.ComponentQuery.query('postgridmemorytype')[0],

                    store = grid.getStore();

                if (record){ //edit post

                    record.set(formValues);

                }else{ //new post

                    var newRecords = Ext.create('FormInput.model.Post', {

                        id: formValues.id,
                        newstitle: formValues.newstitle,
                        cdate: formValues.cdate,
                        fpost: formValues.fpost,

                    });

                    store.insert(0,newRecords);

                }

                store.sync();

                form.getForm().reset();

                editorWin.close();
            }
});