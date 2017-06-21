// Slick Slider
$(document).ready(function() {
	$('.feedback-slider').slick({
		infinite: true,
  	slidesToShow: 2,
  	slidesToScroll: 2,
  	arrows: true,
  	prevArrow: '<div class="feedback-arrow feedback-arrow-left"><i class="fa fa-chevron-left"></i></div>',
  	nextArrow: '<div class="feedback-arrow feedback-arrow-right"><i class="fa fa-chevron-right"></i></div>',
  	dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
	});
});

// Google Maps
// When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 11,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(55.7517163, 48.7473099), // Innopolis

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#004358"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#1f8a70"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#1f8a70"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#fd7400"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#1f8a70"},{"lightness":-20}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#1f8a70"},{"lightness":-17}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"visibility":"on"},{"weight":0.9}]},{"elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#1f8a70"},{"lightness":-10}]},{},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#1f8a70"},{"weight":0.7}]}]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(40.6700, -73.9400),
                    map: map,
                    title: 'Snazzy!'
                });
            }

// NiceScroll
$(document).ready(
          function() {
              $("html").niceScroll({
                cursorcolor:"#ff5c36",
                cursoropacitymin: 1,
                cursorwidth: 7 
              });
          }
      );

// WowJS
new WOW().init();