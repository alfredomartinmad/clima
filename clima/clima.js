const axios = require('axios');
const apikey = '1aaea6b47cf0d924bca05cab3dacdda6';

const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`);



    if (resp.data.main.temp) {
        return resp.data.main.temp;

    } else {
        throw new Error(`No se pudo determinar el clima`);
    }





}

module.exports = {
    getClima
}