Ext.define('ORest.view.Main', {
    	extend: 'Ext.container.Viewport',
	cls: 'x-border-layout-ct',
    	//alias: 'widget.main',
    	requires: ['ORest.view.Header', 'ORest.view.Cards'],
	padding: 5,
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	items: [{
		xtype: 'theheader',
		height: 80
	}, {
		xtype: 'thecards',
		flex: 1 
	}]
});

