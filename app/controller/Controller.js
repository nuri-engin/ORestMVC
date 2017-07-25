Ext.define('ORest.controller.Controller', {
	extend: 'Ext.app.Controller',
	alias: 'controller.orest',
	views: ['orest.ManageOrest'],
	//stores: ['Store'],
	//models: ['Model'],
	refs: [{
		ref: 'orestList',
		selector: 'themanageorest thelist'
	}, {
		ref: 'form',
		selector: 'themanageorest theform'
	}, {
		ref: 'addRecordBtn',
		selector: 'themanageorest #addRecordBtn'
	}, {
		ref: 'saveBtn',
		selector: 'themanageorest theform #saveBtn'
	}, {
		ref: 'deleteBtn',
		selector: 'themanageorest theform #deleteBtn'
	}, {
		ref:'formFieldset',
		selector: 'themanageorest theform fieldset'
	}, {
		ref: 'idField',
		selector: 'themanageorest theform textfield[name=id]'
	}],

	init: function(application) {
		this.control({
			'thelist': {
				itemclick: this.doSelect,
				viewready: this.doInitStore
			}
		});
	},
	doSelect: function(grid, record) {
		console.log('this is doSelect');
		var me = this;
		me.getForm().loadRecord(record);
		me.getFormFieldset().setTitle('Edit Record ' + record.get('logoname'));
		me.getIdField().disable();
		me.getDeleteBtn().enable();
	},
	doInitStore: function() {
		console.log('do init');
		//this.getOrestList().getStore.load();
	}
});
