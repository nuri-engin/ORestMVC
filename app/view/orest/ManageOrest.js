Ext.define('ORest.view.orest.ManageOrest', {
	extend: 'Ext.panel.Panel',
	xtype: 'themanageorest',

	requires: [
		'Ext.toolbar.Toolbar',
		'ORest.view.orest.List',
		'ORest.view.orest.Form'
	],
	
	layout: {
		type: 'hbox',
		align: 'stretch'
	},
	
	initComponent: function() {
		var me = this;
		Ext.applyIf(me, {
			dockedItems: [
			   {
				xtype: 'toolbar',
				dock: 'top',
				items: [
				  {
					xtype: 'button',
					itemId: 'addRecordBtn',
					iconCls: 'addnew',
					text: 'Add New Record'
				  }
				]
       			    }
			],
			items: [{
				xtype: 'thelist',
				width: 900,
				margin: 10		
			}, {
				xtype: 'theform',
				flex: 1
			}]	
		});
		me.callParent(arguments);
	}
});
