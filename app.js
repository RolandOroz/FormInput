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



    // The name of the initial view to create.
   //mainView: 'FormInput.view.main.FieldContainer'
    mainView: 'FormInput.view.main.Main'
});
