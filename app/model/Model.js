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
		defaultHeaders: { 'Content-Type': 'application/json' },
		api: { 
			read: 'http://192.168.0.223:8223/orest/agency',
			create: 'http://192.168.0.223:8223/orest/agency'
		},
		reader: {
			type: 'json'
		},
		writer: {
			type: 'json',
			allowSingle: false,
			encode: true,
			rootProperty: 'data',
			writeAllFields: true 
		}
	}
});
