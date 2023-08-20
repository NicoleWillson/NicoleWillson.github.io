// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
    [-104.949150,39.885950],
    [-104.948140,39.885960],
    [-104.987100,39.740190],
    [-104.975870,39.769920],
  ];
  
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk..04WyWLwnIlVNKATcEKK0nA';
  
  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    center: [-104.990250,39.739235],
    zoom: 12,
  });
  
  // TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
    var marker = new mapboxgl.Marker()
        .setLngLat([-104.949150,39.885950])
        .addTo(map);
  
  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    // Use counter to access bus stops in the array busStops
    // Make sure you call move() after you increment the counter.
      setTimeout(() => {
        if (counter >= busStops.length) return;
        marker.setLngLat(busStops[counter]);
        counter++;
        move();
      }, 1000)
    
  }
