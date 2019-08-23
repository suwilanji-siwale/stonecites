var mapLocation = new google.maps.LatLng(-12.842038, 28.230155); //change coordinates here
var marker;
var map;

function initialize() {
    var mapOptions = {
        zoom: 15, // Change zoom here
        center: mapLocation,
        scrollwheel: false,
        styles: [{
                "featureType": "administrative",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#333333"
                }]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{
                    "color": "#f2f2f2"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{
                    "saturation": -100
                }, {
                    "lightness": 45
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "visibility": "simplified"
                }, {
                    "color": "#f6954d"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e3e2e2"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{
                    "color": "#a4c4c8"
                }, {
                    "visibility": "on"
                }]
            }
        ]
    };

    map = new google.maps.Map(document.getElementById('map'),
        mapOptions);


    //change address details here
    var contentString = '<div class="map-info">' +
        '<div class="map-title">' +
        '<div class="brand" href="#"><img alt="" src="images/brand.png"><div class="brand-info"><div class="brand-name">Stonecites</div><div class="brand-text">Limited</div></div></div></div>' +
        '<div class="map-address-row">' +
        '  <span class="text"><strong class="text-dark">Kitwe, Old Airport Road, Zambia,</strong><br>' +
        '  Mukuba Natwange</span>' +
        '</div>' +
        '<div>' +
        '   <span class="text"><strong class="text-dark">Phone:</strong> 0966 945405, 0966947782</span>' +
        '</div>' +
        '<div class="map-address-row">' +
        '   <span class="map-email">' +
        '      <span class="text"><strong class="text-dark">Email:</strong>stonecitesltd@zamtel.com</span>' +
        '   </span>' +
        '</div>' +
        '<p class="gmap-open"><a href="https://www.google.com/maps/@-37.824812,144.965981,14z?hl=ru-RU" target="_blank">Open on Google Maps</a></p></div>';


    var infowindow = new google.maps.InfoWindow({
        content: contentString,
    });


    // Uncomment down to show Marker
    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        title: 'Stonecites Limited', //change title here
        animation: google.maps.Animation.DROP,
        position: mapLocation
    });



    // Uncomment down to show info window on marker
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });




}

if ($('#map').length) {
    google.maps.event.addDomListener(window, 'load', initialize);
}