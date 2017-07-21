Ext.define('ORest.model.Model', {
    extend: 'Ext.data.Model',

	fields: [
		{name: 'id', type: 'int'},
		{name: 'hotelrefno', type: 'int'},
		{name: 'usercode', type: 'string'},
		{name: 'langcode', type: 'string'},
		{name: 'agencysubcode', type: 'string'},
		{name: 'logoname', type: 'string'},
		{name: 'adress1', type: 'string'},
		{name: 'tel', type: 'int'},
		{name: 'accstatuscode', type: 'string'}
	],
	
	idProperty: 'id',
	proxy: {
		type: 'ajax',
		idParam: 'id',
		api: { 
			read: 'http://192.168.0.223:8223/orest/agency'
		},
		reader: {
			type: 'json'
		}
	}
});
