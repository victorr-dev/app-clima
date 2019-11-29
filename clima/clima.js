const { apiClima } = require('../utils/apis')
const API_KEY = '4a19ba6aa9d34bae201d533bfbbf281e'


const getClimaLugar = async (lat, long) => {
    const result = await apiClima.get(`weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`)

    return result.data.main.temp
}

module.exports = {
    getClimaLugar
}