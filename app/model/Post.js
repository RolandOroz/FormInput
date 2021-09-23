Ext.define('FormInput.model.Post', {
    extend: 'Ext.data.Model',
    alias: 'model.post',

   // idProperty: 'id',

   // fields:
   // [
   //     'id', 'newstitle', 'cdate', 'fPost'
   // ]

    fields:
        [
            {
                name: 'id',
                type: 'int'
            },
            {
              //  name: 'newstitle',//TODO:uncomment to load real Post layout
                name: 'title', //TODO: delete to load real Post layout
                type: 'string'
            },
            {
              //  dateformat: 'C', //TODO:uncomment to load real Post layout
              //  name: 'cdate', //TODO:uncomment to load real Post layout
                  name: 'userId', //TODO: delete to load real Post layout
                //type: 'date'
            },
            {
              //  name: 'fpost', //TODO:uncomment to load real Post layout
                  name: 'body' //TODO: delete to load real Post layout
             //   type: 'string' //TODO:uncomment to load real Post layout
            }
        ],
  /*  proxy:
    {
        type: 'rest',
        url: 'http://localhost:1941/posts',
        reader:
            {
                type: 'json',
                root: '/'
            }
    } */
});