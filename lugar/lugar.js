const {apiLugar} = require('../utils/apis')

const getLugarLatLng = async (direccion) => {

        const respuesta = await apiLugar.get(`?location=${direccion}`)

        if(respuesta.data.Results.length === 0){
            throw new Error(`No hay resultados para ${direccion}`)
        }

        const data = respuesta.data.Results[0]

        const {name: direc, lat:lat, lon :long} = data

        return {
            direc,
            lat,
            long
        }
}

module.exports = {
    getLugarLatLng
}