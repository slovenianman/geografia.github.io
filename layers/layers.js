var wms_layers = [];


        var lyr_hibrido_0 = new ol.layer.Tile({
            'title': 'hibrido',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_Reprojectedraster_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Reprojected raster",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Reprojectedraster_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-20033160.923095, -8506586.362647, 20036819.331005, 6932918.662887]
                            })
                        });
var format_distribucion_quijote_2 = new ol.format.GeoJSON();
var features_distribucion_quijote_2 = format_distribucion_quijote_2.readFeatures(json_distribucion_quijote_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_distribucion_quijote_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_distribucion_quijote_2.addFeatures(features_distribucion_quijote_2);
var lyr_distribucion_quijote_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_distribucion_quijote_2, 
                style: style_distribucion_quijote_2,
                interactive: true,
                title: '<img src="styles/legend/distribucion_quijote_2.png" /> distribucion_quijote'
            });

lyr_hibrido_0.setVisible(true);lyr_Reprojectedraster_1.setVisible(true);lyr_distribucion_quijote_2.setVisible(true);
var layersList = [lyr_hibrido_0,lyr_Reprojectedraster_1,lyr_distribucion_quijote_2];
lyr_distribucion_quijote_2.set('fieldAliases', {'fid': 'fid', 'field_1': 'field_1', 'City Name': 'City Name', 'Coordinates': 'Coordinates', });
lyr_distribucion_quijote_2.set('fieldImages', {'fid': '', 'field_1': '', 'City Name': '', 'Coordinates': '', });
lyr_distribucion_quijote_2.set('fieldLabels', {'fid': 'no label', 'field_1': 'no label', 'City Name': 'no label', 'Coordinates': 'no label', });
lyr_distribucion_quijote_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});