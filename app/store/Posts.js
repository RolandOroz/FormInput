Ext.define('FormInput.store.Posts', {
    extend: 'Ext.data.Store',

    alias: 'store.postdata',

    requires:
        [
            //TODO:'FormInput.model.Post',
            //TODO:'Ext.data.proxy.Ajax',
            //TODO:'Ext.data.reader.Json'
        ],

    constructor: function(cfg)
        {
            var me = this;
            cfg = cfg || {};
            me.callParent
            (
                [
                    Ext.apply
                        (
                            {
                                storeId: 'Post',
                                autoLoad: true,
                               // model: 'FormInput.model.Post',

                                proxy:
                                {
                                    type: 'ajax',
                                    url: 'http://localhost:1843/console/login.do?jsessionid=dcb01b7df68180c1994954f99c9527c1',
                                    reader:
                                    {
                                        type: 'json'
                                    }
                                }

                            },
                            cfg
                        )
                ]
            );
        }

});
