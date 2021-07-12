const axios = require('axios').default;
const fetchData = require('fetch').fetchUrl;
const { isJson } = require('./isJson.controller')
const axiosCookieSuport = require("axios-cookiejar-support").default;
const tough = require("tough-cookie");
var headers = {
    'accept': '*/*',
    'if-none-match': 'W/"ce9ef8a4f6"',
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
    'cache-control': 'max-age=0',
    'origin': 'https://www.sofascore.com',
    'referer': 'https://www.sofascore.com/',
    'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
    'sec-ch-ua-mobile': '?0',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-site',
    'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36'
};
axiosCookieSuport(axios);
const cookieJar = new tough.CookieJar();
let apiCookie = { withCredentials: true, jar: cookieJar };
const axiosConfig = {
    baseURL: 'https://api.sofascore.com/',
    proxy: false,
    headers: headers,
    withCredentials: true,
    jar: cookieJar
};

var api = axios.create(axiosConfig);

const fetch = (url, option) => {
    return new Promise((resolve, reject) => {
        fetchData(url, option, (error, meta, rest) => {
            if (error) {
                return reject(error)
            } else {
                if(isJson(rest.toString())){
                    return resolve(JSON.parse(rest.toString()))
                }else{
                    return resolve(rest.toString())
                }
            }
        })
    })
}

module.exports = {
    api, apiCookie, axiosConfig, fetch
}