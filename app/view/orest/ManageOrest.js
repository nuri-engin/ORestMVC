Ext.define('ORest.view.orest.ManageOrest', {
	extend: 'Ext.panel.Panel',
	xtype: 'themanageorest',
	
	requires: [
		'Ext.toolbar.Toolbar',
		'Ext.button.Button', 
		'ORest.view.orest.List',
		'ORest.view.orest.Form'
	],
	
	layout: {
		type: 'hbox',
		align: 'stretch'
	},
	items: [{
			xtype: 'thelist',
			width: 900,
			margin: 10		
		}, {
			xtype: 'theform',
			flex: 1
			}]
});
