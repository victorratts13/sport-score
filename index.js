// index.js
const fetch = require('axios-fetch-request');
const dateFormat = require('dateformat');
const api = new fetch();
var base = 'https://api.sofascore.com';
class score {
    constructor(config = {
        version: 'v1',
        timerUTC: new Date(),
        sport: 'football'
    }) {
        this.version = config.version;
        this.now = config.timeUTC;
        this.sport = config.sport;

    }

    getlang(lang = false) {
        return new Promise((resolve, reject) => {
            //https://api.sofascore.com/api/v1/country/alpha2
            api.get(`${base}/api/${this.version || 'v1'}/country/alpha2`, false, false).then(rest => {
                return resolve(rest)
            }).catch(e => {
                return reject(e)
            })
        })
    }

    eventCount(count = '-10800') {
        return new Promise((resolve, reject) => {
            //https://api.sofascore.com/api/v1/sport/-10800/event-count
            api.get(`${base}/api/${this.version || 'v1'}/sport/${count}/event-count`, false, false).then(rest => {
                return resolve(rest)
            }).catch(e => {
                return reject(e)
            })
        })
    }

    scheduledEvents(dateEvent = dateFormat(this.now, 'yyyy-mm-dd')) {
        return new Promise((resolve, reject) => {
            //https://api.sofascore.com/api/v1/sport/${this.sport}/scheduled-events/2021-07-12
            api.get(`${base}/api/${this.version || 'v1'}/sport/${this.sport}/scheduled-events/${dateEvent}`, false, false).then(rest => {
                return resolve(rest)
            }).catch(e => {
                return reject(e)
            })
        })
    }

    oddsProviders(lang = 'PT') {
        return new Promise((resolve, reject) => {
            //https://api.sofascore.com/api/v1/odds/providers/BR/web
            api.get(`${base}/api/${this.version || 'v1'}/odds/providers/${lang}/web`, false, false).then(rest => {
                return resolve(rest)
            }).catch(e => {
                return reject(e)
            })
        })
    }

    config = {
        uniqueTournamentsWeb(lang = 'PT') {
            return new Promise((resolve, reject) => {
                //https://api.sofascore.com/api/v1/config/unique-tournaments/BR
                api.get(`${base}/api/${this.version || 'v1'}/config/unique-tournaments/${lang}`, false, false).then(rest => {
                    return resolve(rest)
                }).catch(e => {
                    return reject(e)
                })
            })
        },
        uniqueTournamentsFootball(lang = 'PT') {
            return new Promise((resolve, reject) => {
                //https://api.sofascore.com/api/v1/config/unique-tournaments/BR/football
                api.get(`${base}/api/${this.version || 'v1'}/config/unique-tournaments/${lang}/football`, false, false).then(rest => {
                    return resolve(rest)
                }).catch(e => {
                    return reject(e)
                })
            })
        }
    }

    sport = {
        categories() {
            return new Promise((resolve, reject) => {
                //https://api.sofascore.com/api/v1/sport/${this.sport}/categories
                api.get(`${base}/api/${this.version || 'v1'}/sport/${this.sport}/categories`, false, false).then(rest => {
                    return resolve(rest)
                }).catch(e => {
                    return reject(e)
                })
            })
        },
        toDay(dateEvent = dateFormat(this.now, 'yyyy-mm-dd'), count = '-10800') {
            return new Promise((resolve, reject) => {
                //https://api.sofascore.com/api/v1/sport/${this.sport}/2021-07-12/-10800/categories
                api.get(`${base}/api/${this.version || 'v1'}/sport/${this.sport}/${dateEvent}/${count}/categories`, false, false).then(rest => {
                    return resolve(rest)
                }).catch(e => {
                    return reject(e)
                })
            })
        },
        trendingTopPlayers() {
            return new Promise((resolve, reject) => {
                //https://api.sofascore.com/api/v1/sport/${this.sport}/trending-top-players
                api.get(`${base}/api/${this.version || 'v1'}/sport/${this.sport}/trending-top-players`, false, false).then(rest => {
                    return resolve(rest)
                }).catch(e => {
                    return reject(e)
                })
            })
        }
    }

    oddsFeaturedEvents(dateEvent = dateFormat(this.now, 'yyyy-mm-dd'), page = 1, rand = '-10800') {
        return new Promise((resolve, reject) => {
            //https://api.sofascore.com/api/v1/odds/1/featured-events/${this.sport}/2021-07-12/-10800
            api.get(`${base}/api/${this.version || 'v1'}/odds/${page}/featured-events/${this.sport}/${dateEvent}/${rand}`, false, false).then(rest => {
                return resolve(rest)
            }).catch(e => {
                return reject(e)
            })
        })
    }

    fracionalOdds(event ='', page = 1){
        return new Promise((resolve, reject) => {
            //https://api.sofascore.com/api/v1/event/9223865/odds/1/featured
            api.get(`${base}/api/${this.version || 'v1'}/event/${event}/odds/${page}/featured`, false, false).then(rest => {
                return resolve(rest)
            }).catch(e => {
                return reject(e)
            })
        })
    }

    FootballFeaturedEvents(page) {
        return new Promise((resolve, reject) => {
            //https://api.sofascore.com/api/v1/odds/1/featured-events/football
            api.get(`${base}/api/${this.version || 'v1'}/odds/${page}/featured-events/football`, false, false).then(rest => {
                return resolve(rest)
            }).catch(e => {
                return reject(e)
            })
        })
    }

    heatMap(event = '', player = '') {
        return new Promise((resolve, reject) => {
            //https://api.sofascore.com/api/v1/event/9506640/player/309464/heatmap
            api.get(`${base}/api/${this.version || 'v1'}/event/${event}/player/${player}/heatmap`, false, false).then(rest => {
                return resolve(rest)
            }).catch(e => {
                return reject(e)
            })
        })
    }

    featuredOdds(event = '', page = 1) {
        return new Promise((resolve, reject) => {
            //https://api.sofascore.com/api/v1/event/9286604/odds/1/featured
            api.get(`${base}/api/${this.version || 'v1'}/event/${event}/odds/${page}/featured`, false, false).then(rest => {
                return resolve(rest)
            }).catch(e => {
                return reject(e)
            })
        })
    }

    allData(event = '', page = 1) {
        return new Promise((resolve, reject) => {
            //https://api.sofascore.com/api/v1/event/9476094/odds/1/all
            api.get(`${base}/api/${this.version || 'v1'}/event/${event}/odds/${page}/all`, false, false).then(rest => {
                return resolve(rest)
            }).catch(e => {
                return reject(e)
            })
        })
    }

    votes(event = '') {
        return new Promise((resolve, reject) => {
            //https://api.sofascore.com/api/v1/event/9223864/votes
            api.get(`${base}/api/${this.version || 'v1'}/event/${event}/votes`, false, false).then(rest => {
                return resolve(rest)
            }).catch(e => {
                return reject(e)
            })
        })
    }

    statistics(event = ''){
        return new Promise((resolve, reject) => {
            //https://api.sofascore.com/api/v1/event/9223864/statistics
            api.get(`${base}/api/${this.version || 'v1'}/event/${event}/statistics`, false, false).then(rest => {
                return resolve(rest)
            }).catch(e => {
                return reject(e)
            })
        })
    }

    openUrl(url) {
        return new Promise((resolve, reject) => {
            api.get(url, false, false).then(rest => {
                return resolve(rest)
            }).catch(e => {
                return reject(e)
            })
        })
    }
}

module.exports = score;