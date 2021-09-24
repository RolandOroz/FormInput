/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'FormInput.Application',

    name: 'FormInput',

    requires: [
        // This will automatically load all classes in the FormInput namespace
        // so that application classes do not need to require each other.
        'FormInput.*'
    ],



   // Test views
   // mainView: 'FormInput.view.forms.NewsInput'

   // Main view
    mainView: 'FormInput.view.main.Main'
});
