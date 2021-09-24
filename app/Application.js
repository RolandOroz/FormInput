/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('FormInput.Application', {
    extend: 'Ext.app.Application',

    id: 'appMainView',
    name: 'FormInput',
 /*   requires:
            [
                'FormInput.*',
                'Ext.form.Panel'
            ],
*/
    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    requires:
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
        //sleep(2000); //Delay for loade



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
