Ext.define('FormInput.store.PostApi', {
    extend: 'Ext.data.Store',
    alias: 'store.postApi',

    model: 'FormInput.model.Post',

    pageSize: 20, //TODO: activate on DB setup

    proxy:
        {
            type: 'ajax',
            url: 'https://jsonplaceholder.typicode.com/posts', //TODO:place a real API url it is a mook
            reader:
                {
                    rootProperty: 'data',
                    type: 'json',

                }
        },

      autoLoad: true,



});