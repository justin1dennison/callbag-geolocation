const geolocator = navigator.geolocation


const geolocation = (interval) => {
  let geoId
  let coordinates = null 
  return (start, sink) => {
    if (start != 0) return
    const id = setInterval(() => {
      if(coordinates !== null) sink(1, coordinates)
    }, interval)
    geoId = geolocator.watchPosition(({
      coords
    }) => {
      coordinates = coords
    }, (error) => {
      throw error
    })
    sink(0, t => {
      if (t === 2) {
        clearInterval(id)
        geolocator.clearWatch(geoId)
      }
    })
  }
}


module.exports = geolocation