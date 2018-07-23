const {
  pipe,
  forEach
} = require('callbag-basics')
const geolocation = require('../')

const output = document.querySelector('#output')


pipe(
  geolocation(1000),
  forEach(x => {
    output.innerText = `
      Latitude: ${x.latitude}
      Longitude: ${x.longitude}
    `
  })
)