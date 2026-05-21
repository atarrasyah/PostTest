ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([684454.590004, 9188014.257972, 702218.218604, 9199993.137779]);
var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_AksesibilitasPTN_1 = new ol.format.GeoJSON();
var features_AksesibilitasPTN_1 = format_AksesibilitasPTN_1.readFeatures(json_AksesibilitasPTN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_AksesibilitasPTN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AksesibilitasPTN_1.addFeatures(features_AksesibilitasPTN_1);
var lyr_AksesibilitasPTN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AksesibilitasPTN_1, 
                style: style_AksesibilitasPTN_1,
                popuplayertitle: 'Aksesibilitas PTN',
                interactive: true,
    title: 'Aksesibilitas PTN<br />\
    <img src="styles/legend/AksesibilitasPTN_1_0.png" /> 1,2km (15 menit)<br />\
    <img src="styles/legend/AksesibilitasPTN_1_1.png" /> 2,4km (30 menit)<br />' });
var format_PTNdiSurabaya_2 = new ol.format.GeoJSON();
var features_PTNdiSurabaya_2 = format_PTNdiSurabaya_2.readFeatures(json_PTNdiSurabaya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_PTNdiSurabaya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTNdiSurabaya_2.addFeatures(features_PTNdiSurabaya_2);
var lyr_PTNdiSurabaya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTNdiSurabaya_2, 
                style: style_PTNdiSurabaya_2,
                popuplayertitle: 'PTN di Surabaya',
                interactive: true,
    title: 'PTN di Surabaya<br />\
    <img src="styles/legend/PTNdiSurabaya_2_0.png" /> ITS Manyar<br />\
    <img src="styles/legend/PTNdiSurabaya_2_1.png" /> ITS Sukolilo<br />\
    <img src="styles/legend/PTNdiSurabaya_2_2.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/PTNdiSurabaya_2_3.png" /> UNAIR A<br />\
    <img src="styles/legend/PTNdiSurabaya_2_4.png" /> UNAIR B<br />\
    <img src="styles/legend/PTNdiSurabaya_2_5.png" /> UNAIR C<br />\
    <img src="styles/legend/PTNdiSurabaya_2_6.png" /> UNESA Ketintang<br />\
    <img src="styles/legend/PTNdiSurabaya_2_7.png" /> UNESA Lidah Wetan<br />\
    <img src="styles/legend/PTNdiSurabaya_2_8.png" /> UPNV Jatim<br />' });

lyr_Positron_0.setVisible(true);lyr_AksesibilitasPTN_1.setVisible(true);lyr_PTNdiSurabaya_2.setVisible(true);
var layersList = [lyr_Positron_0,lyr_AksesibilitasPTN_1,lyr_PTNdiSurabaya_2];
lyr_AksesibilitasPTN_1.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_PTNdiSurabaya_2.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Foto': 'Foto', 'QS WUR': 'QS WUR', 'Didirikan': 'Didirikan', 'Fakultas': 'Fakultas', });
lyr_AksesibilitasPTN_1.set('fieldImages', {'fid': 'TextEdit', 'Access': 'TextEdit', });
lyr_PTNdiSurabaya_2.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Foto': 'ExternalResource', 'QS WUR': 'TextEdit', 'Didirikan': 'TextEdit', 'Fakultas': 'TextEdit', });
lyr_AksesibilitasPTN_1.set('fieldLabels', {'fid': 'hidden field', 'Access': 'inline label - always visible', });
lyr_PTNdiSurabaya_2.set('fieldLabels', {'fid': 'hidden field', 'Nama': 'hidden field', 'Kampus': 'inline label - visible with data', 'Foto': 'no label', 'QS WUR': 'inline label - always visible', 'Didirikan': 'inline label - always visible', 'Fakultas': 'inline label - always visible', });
lyr_PTNdiSurabaya_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});