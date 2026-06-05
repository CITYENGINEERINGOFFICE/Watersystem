var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BRGYBOUNDARIES_1 = new ol.format.GeoJSON();
var features_BRGYBOUNDARIES_1 = format_BRGYBOUNDARIES_1.readFeatures(json_BRGYBOUNDARIES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BRGYBOUNDARIES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BRGYBOUNDARIES_1.addFeatures(features_BRGYBOUNDARIES_1);
var lyr_BRGYBOUNDARIES_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BRGYBOUNDARIES_1, 
                style: style_BRGYBOUNDARIES_1,
                popuplayertitle: 'BRGY. BOUNDARIES',
                interactive: false,
                title: '<img src="styles/legend/BRGYBOUNDARIES_1.png" /> BRGY. BOUNDARIES'
            });
var format_Watersystem2026_2 = new ol.format.GeoJSON();
var features_Watersystem2026_2 = format_Watersystem2026_2.readFeatures(json_Watersystem2026_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Watersystem2026_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Watersystem2026_2.addFeatures(features_Watersystem2026_2);
var lyr_Watersystem2026_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Watersystem2026_2, 
                style: style_Watersystem2026_2,
                popuplayertitle: 'Watersystem 2026',
                interactive: true,
                title: '<img src="styles/legend/Watersystem2026_2.png" /> Watersystem 2026'
            });
var group_WATERSYSTEM = new ol.layer.Group({
                                layers: [lyr_Watersystem2026_2,],
                                fold: 'open',
                                title: 'WATERSYSTEM'});
var group_DRAINAGESYSTEM = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'DRAINAGE SYSTEM'});
var group_ROADNETWORK = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'ROAD NETWORK'});
var group_ROADINVENTORYDATA = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'ROAD INVENTORY DATA'});
var group_FILE = new ol.layer.Group({
                                layers: [lyr_BRGYBOUNDARIES_1,],
                                fold: 'open',
                                title: 'FILE'});
var group_CREEKS = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'CREEKS'});

lyr_GoogleSatellite_0.setVisible(true);lyr_BRGYBOUNDARIES_1.setVisible(true);lyr_Watersystem2026_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_FILE,group_WATERSYSTEM];
lyr_BRGYBOUNDARIES_1.set('fieldAliases', {'Barangay': 'Barangay', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', 'Area (sq.m': 'Area (sq.m', 'Sq.km.': 'Sq.km.', 'Hectares': 'Hectares', 'Population': 'Population', 'Dp': 'Dp', 'POP.DENS': 'POP.DENS', });
lyr_Watersystem2026_2.set('fieldAliases', {'PHOTOS': 'PHOTOS', 'BRGY.': 'BRGY.', 'WATERSYSTEM LEVEL': 'WATERSYSTEM LEVEL', 'SOURCE TYPE': 'SOURCE TYPE', 'HOUSEHOLD': 'HOUSEHOLD', 'STORAGE TANK': 'STORAGE TANK', 'TYPE': 'TYPE', 'CAPACITY': 'CAPACITY', 'LENGTH': 'LENGTH', 'WIDTH': 'WIDTH', 'HEIGHT': 'HEIGHT', 'INFLOW SIZE': 'INFLOW SIZE', 'OUTFLOW SIZE': 'OUTFLOW SIZE', 'DATE CONSTRUCTED': 'DATE CONSTRUCTED', 'REMAKRS': 'REMAKRS', });
lyr_BRGYBOUNDARIES_1.set('fieldImages', {'Barangay': 'TextEdit', 'folders': 'TextEdit', 'descriptio': 'TextEdit', 'altitude': 'TextEdit', 'alt_mode': 'TextEdit', 'time_begin': 'TextEdit', 'time_end': 'TextEdit', 'time_when': 'TextEdit', 'Area (sq.m': 'TextEdit', 'Sq.km.': 'TextEdit', 'Hectares': 'TextEdit', 'Population': 'TextEdit', 'Dp': 'TextEdit', 'POP.DENS': 'TextEdit', });
lyr_Watersystem2026_2.set('fieldImages', {'PHOTOS': 'ExternalResource', 'BRGY.': 'TextEdit', 'WATERSYSTEM LEVEL': 'TextEdit', 'SOURCE TYPE': 'TextEdit', 'HOUSEHOLD': 'TextEdit', 'STORAGE TANK': 'ExternalResource', 'TYPE': 'TextEdit', 'CAPACITY': 'TextEdit', 'LENGTH': 'TextEdit', 'WIDTH': 'TextEdit', 'HEIGHT': 'TextEdit', 'INFLOW SIZE': '', 'OUTFLOW SIZE': '', 'DATE CONSTRUCTED': 'TextEdit', 'REMAKRS': 'TextEdit', });
lyr_BRGYBOUNDARIES_1.set('fieldLabels', {'Barangay': 'no label', 'folders': 'no label', 'descriptio': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', 'Area (sq.m': 'no label', 'Sq.km.': 'no label', 'Hectares': 'no label', 'Population': 'no label', 'Dp': 'no label', 'POP.DENS': 'no label', });
lyr_Watersystem2026_2.set('fieldLabels', {'PHOTOS': 'inline label - visible with data', 'BRGY.': 'inline label - visible with data', 'WATERSYSTEM LEVEL': 'inline label - visible with data', 'SOURCE TYPE': 'inline label - visible with data', 'HOUSEHOLD': 'inline label - visible with data', 'STORAGE TANK': 'inline label - visible with data', 'TYPE': 'inline label - visible with data', 'CAPACITY': 'inline label - visible with data', 'LENGTH': 'inline label - visible with data', 'WIDTH': 'inline label - visible with data', 'HEIGHT': 'inline label - visible with data', 'INFLOW SIZE': 'inline label - visible with data', 'OUTFLOW SIZE': 'inline label - visible with data', 'DATE CONSTRUCTED': 'inline label - visible with data', 'REMAKRS': 'inline label - visible with data', });
lyr_Watersystem2026_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});