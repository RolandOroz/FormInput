/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('FormInput.Application', {
    extend: 'Ext.app.Application',

    name: 'FormInput',
    requires: ['FormInput.*'],

    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

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
        sleep(2000); //Delay for loader



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
