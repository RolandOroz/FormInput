/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('FormInput.Application', {
    extend: 'Ext.app.Application',
    id: 'appMainView',
    name: 'FormInput',
    requires:
        [
            'FormInput.*',
            'Ext.form.Panel'
        ],

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    requires:
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
        //sleep(2000); //Delay for loader



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
