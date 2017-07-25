Ext.define('ORest.view.orest.Form', {
	extend: 'Ext.form.Panel',
	xtype: 'theform',
	requires: [
		'Ext.form.FieldSet', 
		'Ext.form.field.Radio', 
		'Ext.form.RadioGroup', 
		'Ext.toolbar.Toolbar'
	],
	layout: {
		type: 'anchor'	
	},
	boddyPadding: 10,
	border: false,
	autoScroll: true,
	initComponent: function() {
		var me = this;
		Ext.apply(me, {
			dockedItems: [{
				xtype: 'toolbar',
				dock: 'top',
				items: [{
					xtype: 'button',
					itemId: 'addRecordBtn',
					iconCls: 'addnew',
					text: 'Add New Record',
					handler: function() {
                        			console.log('haha');
                   			}
				  }]
       			    }],
			items: [{
				xtype: 'fieldset',
				padding: 10,
				width: 350,
				fieldDefaults: {
					anchor: '100%'			
				},
				title: 'ORest',
				items: [{
					xtype: 'textfield',
					name: 'id',
					fieldLabel: 'ID'
				}, {
					xtype: 'textfield',
					name: 'hotelrefno',
					fieldLabel: 'Ref No'
				}, {
					xtype: 'textfield',
					name: 'usercode',
					fieldLabel: 'User Code'
				}, {
					xtype: 'textfield',
					name: 'langcode',
					fieldLabel: 'Language'
				}, {
					xtype: 'textfield',
					name: 'agencysubcode',
					fieldLabel: 'Agency'
				}, {
					xtype: 'textfield',
					name: 'logoname',
					fieldLabel: 'Logo Name'
				}, {
					xtype: 'textfield',
					name: 'address1',
					fieldLabel: 'Address'
				}, {
					xtype: 'textfield',
					name: 'tel',
					fieldLabel: 'Phone'
				}, {
					xtype: 'textfield',
					name: 'accstatuscode',
					fieldLabel: 'Status'
				}, {
					xtype: 'toolbar',
					ui: 'footer',
					layout: {
						pack: 'end',
						type: 'hbox'
					},
					items: [{
						xtype: 'button',
						itemId: 'deleteBtn',
						iconCls: 'delete',
						text: 'Delete',
						handler: function () {console.log('so this is Delete!');}
					
					}, {
						xtype: 'button',
						itemId: 'saveBtn',
						iconCls: 'save',
						text: 'Save',
						handler: function () {console.log('so this is Save!');}

					}]
				}]
			}]
		});
		me.callParent(arguments);
	}
});
