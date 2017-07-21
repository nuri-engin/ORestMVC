Ext.define('ORest.view.Header', {
	extend: 'Ext.container.Container',
	xtype: 'theheader',
	requires: ['Ext.button.Button', 'Ext.form.field.Text'],
	layout: {
		type: 'hbox',
		align: 'center'
	},
	initComponent: function() {
		var me = this;
		Ext.applyIf(me, {
			items: [{
				xtype: 'container',
				cls: 'logo',
				width: 600,
				padding: 5,
				items: [{
					xtype: 'image',
					height: 95,
					width: 95,
					src: 'http://hotech.com.tr/files/E4BF0F19-FE05-4F0F-82E6-6E6C98B6287C/imgs/menu_logo.png'
				}]
			}, {
				xtype: 'container',
				cls: 'search',
				items: [{
					xtype: 'textfield',
					width: 350				
				}, {
					xtype: 'button',
					text: 'Search',
					handler: function() {
						alert('so... it works =)');
					}
				}]
			}]
		});
		me.callParent(arguments);
	}
});
