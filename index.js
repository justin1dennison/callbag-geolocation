const geolocator = navigator.geolocation


const geolocation = () =>  {
  let geoId
  return (start, sink) => {
    const emit = ({ coords }) => { if(coords) sink(1, coords) };
    const onError = (error) => { throw error };
    if (start != 0) return
    geoId = geolocator.watchPosition(
   	emit,
	onError
    );
    sink(0, t => {
      if (t === 2) {
        geolocator.clearWatch(geoId)
      }
    })
  }
}


module.exports = geolocation
