/*
 * File: app/view/mainView.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.mainView', {
    extend: 'Ext.tab.Panel',

    config: {
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'TaskMaster',
                items: [
                    {
                        xtype: 'button',
                        hidden: true,
                        id: 'backButton',
                        itemId: 'mybutton1',
                        ui: 'back',
                        text: 'Back'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        itemId: 'addButton',
                        text: 'Add'
                    }
                ]
            },
            {
                xtype: 'container',
                layout: {
                    type: 'card'
                },
                scrollable: true,
                title: 'Curent',
                iconCls: 'organize',
                items: [
                    {
                        xtype: 'list',
                        id: 'CurrentList',
                        itemId: 'mylist',
                        deselectOnContainerClick: false,
                        itemTpl: [
                            '<div class=priority_{priority}>{name}</div>'
                        ],
                        store: 'TaskStore',
                        onItemDisclosure: false,
                        preventSelectionOnDisclose: false
                    },
                    {
                        xtype: 'panel',
                        id: 'CurrentDetails',
                        tpl: [
                            '<div class="taskName">{name}</div>',
                            '<div class="taskDescription">{description}</div>',
                            '<div class="taskCreated">Created: {created}</div>'
                        ],
                        items: [
                            {
                                xtype: 'toolbar',
                                docked: 'bottom',
                                items: [
                                    {
                                        xtype: 'button',
                                        id: 'EditButton',
                                        itemId: 'mybutton4',
                                        text: 'Edit'
                                    },
                                    {
                                        xtype: 'spacer'
                                    },
                                    {
                                        xtype: 'button',
                                        id: 'CompleteButton',
                                        itemId: 'mybutton5',
                                        text: 'Mark Complete'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        xtype: 'formpanel',
                        margin: '',
                        items: [
                            {
                                xtype: 'textfield',
                                id: 'name',
                                margin: 3,
                                label: 'Name',
                                name: 'name'
                            },
                            {
                                xtype: 'textareafield',
                                id: 'description',
                                margin: 3,
                                label: 'Description',
                                name: 'description'
                            },
                            {
                                xtype: 'selectfield',
                                id: 'priority',
                                margin: 3,
                                label: 'Priority',
                                name: 'priority',
                                value: 2,
                                hiddenName: 'priority',
                                options: [
                                    {
                                        text: 'High',
                                        value: 1
                                    },
                                    {
                                        text: 'Medium',
                                        value: 2
                                    },
                                    {
                                        text: 'Low',
                                        value: 3
                                    }
                                ]
                            },
                            {
                                xtype: 'hiddenfield',
                                id: 'id',
                                name: 'id'
                            },
                            {
                                xtype: 'button',
                                itemId: 'SaveButton',
                                margin: 10,
                                text: 'Save'
                            },
                            {
                                xtype: 'button',
                                itemId: 'CancelButton',
                                margin: 10,
                                text: 'Cancel'
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                layout: {
                    type: 'card'
                },
                scrollable: true,
                title: 'Completed',
                iconCls: 'delete',
                items: [
                    {
                        xtype: 'list',
                        id: 'CompletedList',
                        itemId: 'mylist1',
                        itemTpl: [
                            '<div class=priority_{priority}>{name}</div>'
                        ],
                        store: 'CompletedStore'
                    },
                    {
                        xtype: 'panel',
                        id: 'CompletedDetails',
                        tpl: [
                            '<div class="taskName">{name}</div>',
                            '<div class="taskDescription">{description}</div>',
                            '<div class="taskCreated">Created: {created}</div>',
                            '<div class="taskCompleted">Completed: {completed}</div>'
                        ]
                    }
                ]
            }
        ],
        tabBar: {
            docked: 'bottom'
        },
        listeners: [
            {
                fn: 'onBackButtonTap',
                event: 'tap',
                delegate: '#backButton'
            },
            {
                fn: 'onMybuttonTap',
                event: 'tap',
                delegate: '#addButton'
            },
            {
                fn: 'onCurrentListSelect',
                event: 'select',
                delegate: '#CurrentList'
            },
            {
                fn: 'onEditButtonTap',
                event: 'tap',
                delegate: '#EditButton'
            },
            {
                fn: 'onCompleteButtonTap',
                event: 'tap',
                delegate: '#CompleteButton'
            },
            {
                fn: 'onSaveButtonTap',
                event: 'tap',
                delegate: '#SaveButton'
            },
            {
                fn: 'onMybutton3Tap',
                event: 'tap',
                delegate: '#CancelButton'
            },
            {
                fn: 'onCompletedListSelect',
                event: 'select',
                delegate: '#CompletedList'
            }
        ]
    },

    onBackButtonTap: function(button, e, options) {
        var currentTab = this.getActiveItem();
        currentTab.setActiveItem(0);
        button.hide();
    },

    onMybuttonTap: function(button, e, options) {
        var tabs = this.getInnerItems();
        var currentTab = tabs[0];
        currentTab.setActiveItem(2);
        this.setActiveItem(currentTab);
        var backButton = Ext.getCmp('backButton');
        backButton.hide();
    },

    onCurrentListSelect: function(dataview, record, options) {
        var currentTab = this.getActiveItem();
        var backButton = Ext.getCmp('backButton');
        backButton.show();
        var currentDetails = currentTab.down('panel');

        currentDetails.setRecord(record);
        currentTab.setActiveItem(currentDetails);
    },

    onEditButtonTap: function(button, e, options) {
        var currentTab = this.getActiveItem();
        var DetailsPanel = currentTab.getActiveItem();

        currentTab.setActiveItem(2);
        var formPanel = currentTab.getActiveItem();
        formPanel.setRecord(DetailsPanel.getRecord());

        this.setActiveItem(currentTab);

        var backButton = Ext.getCmp('backButton');
        backButton.hide();
    },

    onCompleteButtonTap: function(button, e, options) {
        var currentTab = this.getActiveItem();
        var detailsPanel = currentTab.getActiveItem();

        var record = detailsPanel.getRecord();

        record.set('completed', new Date());
        record.set('isComplete', true);

        var store = Ext.data.StoreManager.lookup('TaskStore');
        store.sync();

        this.setActiveItem(1);
        var completedList = this.getActiveItem();
        var completedStore = completedList.getActiveItem().getStore();
        completedStore.add(record);
        completedList.getActiveItem().refresh();

        currentTab.setActiveItem(0);

        var backButton = Ext.getCmp('backButton');
        backButton.hide();
    },

    onSaveButtonTap: function(button, e, options) {
        var currentTab = this.getActiveItem();
        var formPanel = currentTab.getActiveItem();

        var values = formPanel.getValues();

        var store = Ext.data.StoreManager.lookup('TaskStore');
        console.log(values.id);
        if(values.id === null) {
            console.log('got NO ID');
            var record = Ext.ModelMgr.create(values, 'MyApp.model.Task');
            record.set('created', new Date());
            store.add(record);
        } else {
            console.log('got an ID');
            var record = store.getById(values.id);
            record.set('name', values.name);
            record.set('description', values.description);
            record.set('priority', values.priority);
        }

        store.sync();
        formPanel.reset();
        currentTab.setActiveItem(0);
    },

    onMybutton3Tap: function(button, e, options) {
        var currentTab = this.getActiveItem();
        currentTab.setActiveItem(0);
    },

    onCompletedListSelect: function(dataview, record, options) {
        var completedTab = this.getActiveItem();
        var backButton = Ext.getCmp('backButton');
        backButton.show();
        var completedDetails = completedTab.down('panel');

        completedDetails.setRecord(record);
        completedTab.setActiveItem(completedDetails);
    }

});