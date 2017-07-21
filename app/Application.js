Ext.define('ORest.Application', {
	name: 'ORest',
	extend: 'Ext.app.Application',
	requires: ['ORest.view.Main'],
	models: ['Model'],
	controllers: ['Controller'],
	stores: ['Store']
});
