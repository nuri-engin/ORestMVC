Ext.define('ORest.controller.Controller', {
	extend: 'Ext.app.Controller',
	views: ['orest.ManageOrest'],
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
		selector: 'themanageorest theform #saveBtn
	}, {
		ref: 'deleteBtn',
		selector: 'themanageorest theform #deleteBtn
	}, {
		ref:'formFieldset',
		selector: 'themanageorest theform fieldset'
	}, {
		ref: 'idField',
		selector: 'themanageorest theform textfield[name=id]
	}],

	init: function(application) {
		this.control({
			'themanageorest #addRecordBtn': {
				click: this.doAdd
			},
			'thelist': {
				itemclick: this.doSelect,
				viewready: this.doInitStore
			},
			'themanageorest theform #saveBtn': {
				click: this.doSave
			},
			'themanageorest theform #deleteBtn': {
				click: this.doDelete
			},
			'themanageorest theform': {
				afterrender: this.doAdd
			},
			'thelist header tool[type="refresh"]': {
				click: this.doRefresh
			}
		});
	},
	doAdd: function() {
		var me = this;
		me.getFormFieldset().setTitle('Add New User');
		me.getIdfield().enable();
		var newRec = Ext.create('ORest.model.Model', {
			adminRole: 'N'
		});
		me.getForm().loadRecord(newRec);
		me.getDeleteBtn().disable();
	},
	doSelect: function(grid, record) {
		console.log('this is doSelect');
		var me = this;
		me.getForm().loadRecord(record);
		me.getFormFieldset().setTitle('Edit Record ' + record.get('id'));
		me.getIdField().disable();
		me.getDeleteBtn().enable();
	},
	doInitStore: function() {
		console.log('this is doInit');
		this.getOrestList().getStore().load();
	}
});
