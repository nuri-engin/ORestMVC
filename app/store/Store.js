Ext.define('ORest.store.Store', {
	extend: 'Ext.data.Store',
	requires: ['ORest.model.Model'],
	model: 'ORest.model.Model',
	proxy: { 
		type: 'ajax', 
		url: 'http://192.168.0.223:8223/orest/agency',
		reader: {
			type: 'json',
			rootProperty: 'data'
		}
	},
	autoLoad: true
	//totalProperty : 'totalCount',
	//successProperty : 'success'
	
});
