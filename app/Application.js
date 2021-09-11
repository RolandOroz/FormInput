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

	removeSplash: function () {
		Ext.getBody().removeCls('launching')
		var elem = document.getElementById("splash")
		elem.parentNode.removeChild(elem)
	},

	launch: function () {
		this.removeSplash()
		var whichView = 'app-main'
		//Ext.Viewport.add([{xtype: app-main}])
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
