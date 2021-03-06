/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    models: [
        'Task'
    ],
    stores: [
        'TaskStore',
        'CompletedStore'
    ],
    views: [
        'mainView'
    ],
    name: 'MyApp',

    launch: function() {
        var TaskStore = Ext.data.StoreManager.lookup('TaskStore');
        var CompletedStore = Ext.data.StoreManager.lookup('CompletedStore');
        var today = new Date();

        if(CompletedStore.getCount()+TaskStore.getCount() === 0) {
            console.log('we have no records');
            TaskStore.add({name: 'Here Is A Task', description: 'You can mark the task complete by clicking the Completed button below.', priority: 1, created: today, completed: '', isComplete: false});
            TaskStore.add({name: 'How To Edit A Task', description: 'You can edit the task by clicking the Edit button below.', priority: 2, created: today, completed: '', isComplete: false});
            TaskStore.add({name: 'How To Add A Task', description: 'Add a task by clicking the Add button in the upper right corner.', priority: 3, created: today, completed: '', isComplete: false});
            TaskStore.sync();
        } else {
            console.log('we have records');
        }

        Ext.create('MyApp.view.mainView', {fullscreen: true});
    }

});
