const axios = require ('axios');
const {TIME_OUT } = process.env;

module.exports = (baseUrlsrv) => {
    return axios.create({
        baseURL: baseUrlsrv,
        timeout: parseInt(TIME_OUT)
    });
}