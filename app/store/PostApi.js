Ext.define('FormInput.store.PostApi', {
    extend: 'Ext.data.Store',
    alias: 'store.postApi',
    restful:true,
    model: 'FormInput.model.Post',

    //pageSize: 20, //TODO: activate on DB setup

    requires:
            [
                'FormInput.model.Post',
                'Ext.data.proxy.Ajax',
                'Ext.data.reader.Json',
                'FormInput.controller.MainMemoryType',
            ],

    proxy:
        {
            type: 'rest',
            url: 'http://localhost:3004/newsposts',
            actionMethods:{

                    create: 'POST',
                    read: 'GET',
                    update: 'PUT',
                    destroy: 'DELETE',
            },

            reader:
                {
                    successProperty:'success',
                    rootProperty: 'newsposts',
                    type: 'json',
                  //  encode: true,
                  //  messageProperty: 'message',
                },
            writer: {
                type: 'json',
                rootProperty: 'newsposts',
               // messageProperty: 'message',
            }

        },

      autoLoad: true,



});