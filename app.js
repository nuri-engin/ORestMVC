Ext.Loader.setConfig({
	enabled: true
});

Ext.application({
    models: ['Model'],
    stores: ['Store'],
    views: ['Main'],
    controllers: ['Controller'],
    name: 'ORest',

    //mainView: 'ORest.view.Main',

    launch: function() { 
	Ext.create('ORest.view.Main');
    }
});
