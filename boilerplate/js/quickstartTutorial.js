// Add all scripts to the JS folder
// declaring map variable and setting start view using latlng coordinates
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

// adding mapbox streets tile layer, including the URL template for tile images, attribution, and max zoom, etc.
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoic2FyYWhwZXRlcnMiLCJhIjoiY2t0a3MyYm12MHJweTJwcXpwbnZ4ZzRqZCJ9.KoF61E-KsQ9syvXuISOwUw'
}).addTo(mymap);
// creating marker, circle, and polygon variables and adding the created shapes to the map
var marker = L.marker([51.5,-0.09]).addTo(mymap);
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

//attach popup messages to ecah of our created map objects
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

// adding popup layer that is not associted with specific object
var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);
// allowing user interaction by showing alert when user clicks on map
function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

mymap.on('click', onMapClick);
var popup = L.popup();

//redefining click function to work with popup instead of browser alerts
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);