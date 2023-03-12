const request = require('request')

const forecast = (latitude, longitude, callback)=>{
    const url = 'http://api.weatherstack.com/current?access_key=6975365d677f8b01fc6efc6e4ed61d30&query=' + latitude + ',' +longitude + '&units=f'

    request({url:url , json:true}, (error, response)=>{
        if(error){
            callback('Unable to connect service!',undefined)
        }
        else if(response.body.error){
            callback('Unable to find location!',undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })

}

module.exports=forecast