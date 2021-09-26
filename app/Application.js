/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('FormInput.Application', {
    extend: 'Ext.app.Application',
<<<<<<< HEAD

    id: 'appMainView',
    name: 'FormInput',
 /*   requires:
            [
                'FormInput.*',
                'Ext.form.Panel'
            ],
*/
=======
    id: 'appMainView',
    name: 'FormInput',
    requires:
        [
            'FormInput.*',
            'Ext.form.Panel'
        ],

>>>>>>> 18de30478e1c6becee6f889c8291a6bb5a83c611
    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    requires:
<<<<<<< HEAD
            [
                'Ext.toolbar.Paging',
                'FormInput.*',
                'Ext.form.Panel',
            ],
       model:
            [
                'FormInput.model.Post',
                'FormInput.view.main.MainModel',
            ],
        views:
            [
                'FormInput.view.LeftPanelSide',
                'FormInput.view.main.Main',
                'FormInput.view.main.MainBorder',
                'FormInput.view.main.PostGrid',
                'FormInput.view.main.PostGridMemoryType',
                'FormInput.main.PostsFormMemoryType',
                'FormInput.main.PostsForm',
                'FormInput.model.Post'
            ],

        stores:
            [
                'FormInput.store.PostApi',
                'FormInput.store.Posts'
            ],

        controllers:
            [
                'MainMemoryType',
                'Main',


            ],
=======
        [
            'Ext.toolbar.Paging'
        ],

    views:
        [
            'FormInput.model.Post'
        ],

    stores:
        [
            'FormInput.store.PostApi'
        ],

    controllers:
        [
            'Main'
        ],
>>>>>>> 18de30478e1c6becee6f889c8291a6bb5a83c611

    launch: function () {
        this.removeSplash()
        var whichView = 'app-mainView'
        
        function sleep(milliseconds) {
            const date = Date.now();
            let currentDate = null;
            do {
                currentDate = Date.now();
            } while (currentDate - date < milliseconds);
        }
<<<<<<< HEAD
        //sleep(2000); //Delay for loade
=======
        //sleep(2000); //Delay for loader
>>>>>>> 18de30478e1c6becee6f889c8291a6bb5a83c611



    },

	removeSplash: function () {
		Ext.getBody().removeCls('launchingLoadPage')
		var elem = document.getElementById("splashLoadPage")
        elem.parentNode.removeChild(elem)
        
	},
    



    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
