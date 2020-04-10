const axios = require('axios')



const getLugarLatLng = async(direccion) => {

    const encodedUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${direccion}`,
        headers: {
            'x-rapidapi-key': '5b60738460mshb1bd52a173247e0p188dc4jsn99d4e3a0f4f2'
        }

    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion: dir,
        lat,
        lng
    }



}

module.exports = {
    getLugarLatLng
}