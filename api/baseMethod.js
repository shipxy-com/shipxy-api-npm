const axios = require('axios')

const { apiUrl } = require('../config');

async function getMethod(methodName, params) {
    let baseUrl = apiUrl + "/" + methodName
    let res = await axios({
        method: 'get',
        url: baseUrl,
        params: params,
    });
    return res.data
}

async function postMethod(methodName, params) {
    let baseUrl = apiUrl + "/" + methodName
    let res = await axios({
        method: 'post',
        url: baseUrl,
        params: params,
    });
    return res.data
}

module.exports = {
    getMethod,
    postMethod
}
