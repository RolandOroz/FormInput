Ext.define('FormInput.model.Post', {
    extend: 'Ext.data.Model',
    alias: 'model.postmodel',

    name: 'News Viewer',

   fields:
        [
            {
                name: 'id',
                type: 'int'
            },
            {
                name: 'newstitle',
                type: 'string'
            },
            {

                name: 'cdate',
                type: 'date',
                //dateFormat: 'c',

            },
            {
                name: 'fpost',
                type: 'string'
            }
        ],

});