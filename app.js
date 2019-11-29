const argv = require('./config/config').argv
const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')
const direccionUri = encodeURI(argv.direccion)



//lugar.getLugarLatLng(direccionUri).then(res => {
//    console.log(res)
//})



const main = async function (ciudadUri) {
    try {
        const ciudad = await lugar.getLugarLatLng(ciudadUri)
        const climaCiudad = await clima.getClimaLugar(ciudad.lat, ciudad.long)

        console.log(`La ciudad: ${ciudadUri}`)
        console.log(`Tiene un clima de: ${climaCiudad}`)
    } catch (error) {
        console.log(error)
    }
}


main(direccionUri);