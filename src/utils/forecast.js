const request = require('request')

const forecast = (lat, lon, callback ) =>{
    const url = 'http://api.weatherstack.com/current?access_key=ef0f0bc156bd5945162c75564372ac32&query=' + lat + ',' + lon + '&units=m'
    request({url, json:true}, (error, {body})=>{
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }
        else if(body.error){ 
            callback(response.body.error.info, undefined)
        } 
        else{
            callback(undefined, body.current.weather_descriptions[0] + '. The current temperature for ' +body.location.name+ ' is ' +body.current.temperature+ ' degree celsius. The cloudcover is ' +body.current.cloudcover)
        }
    })
}

module.exports=forecast




