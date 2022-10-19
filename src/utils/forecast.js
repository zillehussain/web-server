const request = require('request')

const forecast = ( latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9bf28cc73cf514b0d6f47cbbbbda33cc&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true}, (error, { body }) => {
        if (error) { 
            callback('unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('unable to find location', undefined)
        } else {
            callback(undefined, body.weather_descriptions + ' it is currently ' + body.current.temperature + ' degrees out. there is a ' + body.current.precip + '%chance of rain.')
        }
    })
}

module.exports = forecast
