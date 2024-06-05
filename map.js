console.log('hello main.js');
var map = L.map('map').setView([51.505, -0.09], 13);

function init(){
const newport = {

    lat: 41.48140,
    lng: -71.31041
}

const zoomLevel = 7;

const map = L.map('mapid').setView(newport.lat, newport.lng, zoomLevel);

const mainLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    id:'thunderforest',
    accessToken: '0330ba1b64f14e2292f26b72517f056d'
});

mainLayer.addTo(map);
}

