const axios = require('axios')

const apiLugar = axios.create({
    baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php',
    headers: {
        'x-rapidapi-host' : 'devru-latitude-longitude-find-v1.p.rapidapi.com',
        'x-rapidapi-key' : '19ebc01737mshba642ff8256c0ffp1dae86jsnbe03b3d6bdfe'
    }
})

const apiClima = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
})

module.exports = {
    apiClima,
    apiLugar
}
