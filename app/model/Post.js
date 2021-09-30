Ext.define('FormInput.model.Post', {
    extend: 'Ext.data.Model',
    alias: 'model.postmodel',

  //  idProperty: 'id',

    fields:
        [
            {
                name: 'id',
                type: 'int',
            },
            {
                name: 'newstitle',

            },
            {

                name: 'cdate',
                type: 'date',
                dateFormat: 'c',
            },
            {
                name: 'fpost',

            }
        ],

});