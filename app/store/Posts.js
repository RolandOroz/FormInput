Ext.define('FormInput.store.Posts', {
    extend: 'Ext.data.Store',
    model: 'FormInput.model.Post',
    alias: 'store.posts',


        //"data:" here is only for test use
        data:
            {'success' : true,

                posts:
                    [
                        { id: 101, newstitle: 'Cell editing', cdate: '09/13/2021', fpost:'Once the records are edited, by default, it won\'t save the records to the server. You have to set the autosync for store property to true, which will trigger a request to the server for any CRUD operation.'},
                                                { id: 102, newstitle: 'Row editing', cdate: '02/10/2018', fpost:'In cell editing, you can edit one cell at a time, but in row editing, you can edit one row at a time.'},
                                                { id: 103, newstitle: 'Grouping', cdate: '11/01/1998', fpost:'In order to group a column, you need to specify the grouping field using the groupField property of the store, and we need to set Ext.grid.feature.Feature in the grid, as shown in the following code'},
                                                { id: 104, newstitle: 'The pivot grid', cdate: '04/04/2004', fpost:'This lets you reorganize and summarize selected columns and rows of data to obtain a desired report.'},
                                                { id: 5, newstitle: 'The company directory – a sample project', cdate: '05/11/2020', fpost:'By looking at the design, you know that the most important component of this project is the grid.'},
                                                { id: 1101, newstitle: 'Cell editing', cdate: '09/13/2021', fpost:'Once the records are edited, by default, it won\'t save the records to the server. You have to set the autosync for store property to true, which will trigger a request to the server for any CRUD operation.'},
                                                { id: 1402, newstitle: 'Row editing', cdate: '02/10/2018', fpost:'In cell editing, you can edit one cell at a time, but in row editing, you can edit one row at a time.'},
                                                { id: 1703, newstitle: 'Grouping', cdate: '11/01/1998', fpost:'In order to group a column, you need to specify the grouping field using the groupField property of the store, and we need to set Ext.grid.feature.Feature in the grid, as shown in the following code'},
                                                { id: 1404, newstitle: 'The pivot grid', cdate: '04/04/2004', fpost:'This lets you reorganize and summarize selected columns and rows of data to obtain a desired report.'},
                                                { id: 1105, newstitle: 'The company directory – a sample project', cdate: '05/11/2020', fpost:'By looking at the design, you know that the most important component of this project is the grid.'},
                                                { id: 17701, newstitle: 'Cell editing', cdate: '09/13/2021', fpost:'Once the records are edited, by default, it won\'t save the records to the server. You have to set the autosync for store property to true, which will trigger a request to the server for any CRUD operation.'},
                                                { id: 19202, newstitle: 'Row editing', cdate: '02/10/2018', fpost:'In cell editing, you can edit one cell at a time, but in row editing, you can edit one row at a time.'},
                                                { id: 10743, newstitle: 'Grouping', cdate: '11/01/1998', fpost:'In order to group a column, you need to specify the grouping field using the groupField property of the store, and we need to set Ext.grid.feature.Feature in the grid, as shown in the following code'},
                                                { id: 11904, newstitle: 'The pivot grid', cdate: '04/04/2004', fpost:'This lets you reorganize and summarize selected columns and rows of data to obtain a desired report.'},
                                                { id: 1205, newstitle: 'The company directory – a sample project', cdate: '05/11/2020', fpost:'By looking at the design, you know that the most important component of this project is the grid.'},
                                                { id: 17501, newstitle: 'Cell editing', cdate: '09/13/2021', fpost:'Once the records are edited, by default, it won\'t save the records to the server. You have to set the autosync for store property to true, which will trigger a request to the server for any CRUD operation.'},
                                                { id: 11102, newstitle: 'Row editing', cdate: '02/10/2018', fpost:'In cell editing, you can edit one cell at a time, but in row editing, you can edit one row at a time.'},
                                                { id: 15503, newstitle: 'Grouping', cdate: '11/01/1998', fpost:'In order to group a column, you need to specify the grouping field using the groupField property of the store, and we need to set Ext.grid.feature.Feature in the grid, as shown in the following code'},
                                                { id: 10124, newstitle: 'The pivot grid', cdate: '04/04/2004', fpost:'This lets you reorganize and summarize selected columns and rows of data to obtain a desired report.'},
                                                { id: 152045, newstitle: 'The company directory – a sample project', cdate: '05/11/2020', fpost:'By looking at the design, you know that the most important component of this project is the grid.'},
                                                { id: 121101, newstitle: 'Cell editing', cdate: '09/13/2021', fpost:'Once the records are edited, by default, it won\'t save the records to the server. You have to set the autosync for store property to true, which will trigger a request to the server for any CRUD operation.'},
                                                { id: 1417402, newstitle: 'Row editing', cdate: '02/10/2018', fpost:'In cell editing, you can edit one cell at a time, but in row editing, you can edit one row at a time.'},
                                                { id: 17703, newstitle: 'Grouping', cdate: '11/01/1998', fpost:'In order to group a column, you need to specify the grouping field using the groupField property of the store, and we need to set Ext.grid.feature.Feature in the grid, as shown in the following code'},
                                                { id: 111404, newstitle: 'The pivot grid', cdate: '04/04/2004', fpost:'This lets you reorganize and summarize selected columns and rows of data to obtain a desired report.'},
                                                { id: 111805, newstitle: 'The company directory – a sample project', cdate: '05/11/2020', fpost:'By looking at the design, you know that the most important component of this project is the grid.'},
                                                { id: 178701, newstitle: 'Cell editing', cdate: '09/13/2021', fpost:'Once the records are edited, by default, it won\'t save the records to the server. You have to set the autosync for store property to true, which will trigger a request to the server for any CRUD operation.'},
                                                { id: 1911202, newstitle: 'Row editing', cdate: '02/10/2018', fpost:'In cell editing, you can edit one cell at a time, but in row editing, you can edit one row at a time.'},
                                                { id: 107143, newstitle: 'Grouping', cdate: '11/01/1998', fpost:'In order to group a column, you need to specify the grouping field using the groupField property of the store, and we need to set Ext.grid.feature.Feature in the grid, as shown in the following code'},
                                                { id: 119704, newstitle: 'The pivot grid', cdate: '04/04/2004', fpost:'This lets you reorganize and summarize selected columns and rows of data to obtain a desired report.'},
                                                { id: 12905, newstitle: 'The company directory – a sample project', cdate: '05/11/2020', fpost:'By looking at the design, you know that the most important component of this project is the grid.'}

                    ]
            },

        proxy:
            {
                type:'memory',

                reader:
                    {
                        type: 'json',
                        rootProperty: 'posts',

                    },
                writer:
                    {
                        type: 'json',
                        encode: true,
                        rootProperty: 'posts'
                    }
            },
            autoLoad: true,



    /*

    requires:
        [
            'FormInput.model.Post'
            //'Ext.data.proxy.Ajax',
            //'Ext.data.reader.Json'
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
                                 model: 'FormInput.model.Post'
                            },
                            cfg
                        )
                ]
            );
        }
        } */
});
