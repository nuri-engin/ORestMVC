Ext.define('ORest.store.Store', {
	extend: 'Ext.data.Store',
	requires: ['ORest.model.Model'],
	model: 'ORest.model.Model',
	proxy: { 
		type: 'ajax', 
		url: 'http://ip:port/orest/agency',
		reader: {
			type: 'json'
		}
	},
	autoLoad: true
	//totalProperty : 'totalCount',
	//successProperty : 'success'
	
});
