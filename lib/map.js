var satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

map = L.map('map', {
    center: [58.53599,24.37106],
    zoom: 11,
    minZoom: 6,
    maxZoom: 13,
    layers: [satellite]
});



var layer_1988 = L.tileLayer('tile_image1988/{z}/{x}/{y}.png', {tms: 1, opacity: 1.0, attribution: "", minZoom: 6, maxZoom: 13});
var layer_2021 = L.tileLayer('tile_image/{z}/{x}/{y}.png', {tms: 1, opacity: 1.0, attribution: "", minZoom: 6, maxZoom: 13});


var overlaymaps = {"2. Land cover map (1998)": layer_1988, "1. Land cover map (2021)": layer_2021}

var basemaps = {"Satellite": satellite}

L.control.layers(basemaps, overlaymaps, {collapsed: false, sortLayers: true}).addTo(map);
