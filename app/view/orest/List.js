Ext.define('ORest.view.orest.List', {
	extend: 'Ext.grid.Panel',
	xtype: 'thelist',
	store: 'Store',
	title: 'ORest Database',
	viewConfig: {
		markDirty: false,
		stripeRows: false	
	},
	initComponent: function() {
		var me = this;
		Ext.applyIf(me, {
			tools: [{
				type: 'refresh',
				tooltip: 'Refresh the DB',
				handler: function() {alert('ahaa! a new list!!');}
			}],
			columns: [{
				xtype: 'numbercolumn',
				dataIndex: 'id',
				flex: 0,
				text: 'ID'
			}, {
				xtype: 'numbercolumn',
				dataIndex: 'hotelrefno',
				flex: 0,
				text: 'Ref No'
			}, {
				xtype: 'gridcolumn',
				dataIndex: 'usercode',
				flex: 0,
				text: 'User Code'
			}, {
				xtype: 'gridcolumn',
				dataIndex: 'langcode',
				flex: 0,
				text: 'Language'
			}, {
				xtype: 'gridcolumn',
				dataIndex: 'agencysubcode',
				flex: 0,
				text: 'Agency'
			}, {
				xtype: 'gridcolumn',
				dataIndex: 'logoname',
				flex: 0,
				text: 'Logo Name'
			}, {
				xtype: 'gridcolumn',
				dataIndex: 'address1',
				flex: 0,
				text: 'Address',
				width: 200
			}, {
				xtype: 'numbercolumn',
				dataIndex: 'tel',
				flex: 0,
				text: 'Phone'
			}, {
				xtype: 'gridcolumn',
				dataIndex: 'accstatuscode',
				flex: 0,
				text: 'Status'
			},]
		});
		me.callParent(arguments);
	}
});

