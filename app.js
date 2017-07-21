Ext.Loader.setConfig({
	enabled: true
});

Ext.application({
    models: [
        'Model'
    ],
    stores: [
        'Store'
    ],
    views: [
        'Main'
    ],
    name: 'ORest',

    mainView: 'ORest.view.Main',

    launch: function() {
	console.log('Deneme bir iki');    
	Ext.create('ORest.view.Main');
    }
});
