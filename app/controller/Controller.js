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
		ref: 'orestForm',
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
			},
			'themanageorest #addRecordBtn': {
				click: this.doAddRecord
			},
			'themanageorest theform #saveBtn': {
				click: this.doSave
			}
		});
	},
	doSelect: function(grid, record) {
		console.log('this is doSelect');
		var me = this;
		me.getOrestForm().loadRecord(record);
		me.getFormFieldset().setTitle('Edit Record ' + record.get('logoname'));
		me.getIdField().disable();
		me.getDeleteBtn().enable();
	},
	doInitStore: function() {
		console.log('do init');
		//this.getOrestList().getStore.load();
	},
	doAddRecord: function () {
		var me = this;
		me.getFormFieldset().setTitle('Add New Record');
		me.getIdField().enable();
		var newRecord = Ext.create('ORest.model.Model', {
			
		});
		me.getOrestForm().loadRecord(newRecord);
		me.getDeleteBtn().disable();
	},
	doSave: function () {
		var me = this;
		var rec = me.getOrestForm().getRecord();
		if (rec !== null) {
			me.getOrestForm().updateRecord();
			var errs = rec.validate();
			if (errs.isValid()) {
				rec.save ({
					success: function(record, operation) {
						if (typeof record.store === 'undefined') {
							// the record is not yet in a store
							me.getOrestList().getStore().add(record);
							// select the record in the grid
							me.getOrestList().getSelectionModel().select(record, true);
						}
						me.getFormFielset().setTitle('Edit Record' + record.get('logoname'));
						me.getIdField().disable();
						me.getDeleteBtn().enable();		
					},
					failure: function (rec, operation) {
						Ext.Msg.alert('Save Failure', operation.request.scope.reader.jsonData.msg);
					}
				});
			} else {
				me.getOrestForm().getForm().markInvalid(errs);
				Ext.Msg.alert('Invalid Fields', 'Please fix the invalid entries!');			
			}
		}
	}
});
