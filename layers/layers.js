var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Cercledejogginglgal_1 = new ol.format.GeoJSON();
var features_Cercledejogginglgal_1 = format_Cercledejogginglgal_1.readFeatures(json_Cercledejogginglgal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cercledejogginglgal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cercledejogginglgal_1.addFeatures(features_Cercledejogginglgal_1);
var lyr_Cercledejogginglgal_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cercledejogginglgal_1, 
                style: style_Cercledejogginglgal_1,
                interactive: true,
                title: '<img src="styles/legend/Cercledejogginglgal_1.png" /> Cercle de jogging légal'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Cercledejogginglgal_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Cercledejogginglgal_1];
lyr_Cercledejogginglgal_1.set('fieldAliases', {'Nom': 'Nom', 'Pays': 'Pays', 'Ville': 'Ville', 'N° de rue': 'N° de rue', 'Type de vo': 'Type de vo', 'Nom de la': 'Nom de la', 'Code posta': 'Code posta', 'Adresse co': 'Adresse co', 'Adresse se': 'Adresse se', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Cercledejogginglgal_1.set('fieldImages', {'Nom': 'TextEdit', 'Pays': 'TextEdit', 'Ville': 'TextEdit', 'N° de rue': 'TextEdit', 'Type de vo': 'TextEdit', 'Nom de la': 'TextEdit', 'Code posta': 'TextEdit', 'Adresse co': 'TextEdit', 'Adresse se': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Cercledejogginglgal_1.set('fieldLabels', {'Nom': 'inline label', 'Pays': 'no label', 'Ville': 'no label', 'N° de rue': 'no label', 'Type de vo': 'no label', 'Nom de la': 'no label', 'Code posta': 'no label', 'Adresse co': 'no label', 'Adresse se': 'inline label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Cercledejogginglgal_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});