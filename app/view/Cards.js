Ext.define('ORest.view.Cards', {	
	extend: 'Ext.container.Container',
	xtype: 'thecards',
	requires: [
		'Ext.layout.container.Card', 			
		'ORest.view.orest.ManageOrest'
	],
	layout: 'card',
	initComponent: function() {
		var me = this;
		Ext.applyIf(me, {
			items: [{
				xtype: 'themanageorest',
				itemId: 'manageOrestCard'
			}]		
		});
		me.callParent(arguments);
	}
});
