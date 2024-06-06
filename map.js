console.log('hello main.js');

function init() {

var map = L.map('mapid').setView([41.48003, -71.30695], 15);
var marker = L.marker([41.48003, -71.30695]).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}
window.onload = init;
