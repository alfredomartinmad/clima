const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'Dirección de la ciudad para obtener el clima',
            demand: true
        }
    }).argv;

const clima = require('./clima/clima');
const lugar = require('./lugar/lugar');

/*
lugar.getLugarLatLng(argv.direccion)
    .then(res => console.log(res))
    .catch(error => console.log(error))


clima.getClima(40.7500, -74.000).then(resp => {
        console.log(resp);
    })
    .catch(err => {
        console.log(err);
    })
    */



const getInfo = async(direccion) => {


    try {
        let coords = await lugar.getLugarLatLng(direccion);
        let temperatura = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${coords.direccion} es de ${temperatura}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}


getInfo(argv.direccion)
    .then(res => console.log(res))
    .catch(err => console.log(err))