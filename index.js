// index.js
import dateFormat from "dateformat";
import fetch from "axios-fetch-request";
const api = new fetch();
var base = 'https://api.sofascore.com';

class Score {
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
            api.get(`${base}/api/${this.version || 'v1'}/country/alpha2`).then(rest => {
                return resolve(rest)
            }).catch(e => {
                return reject(e)
            })
        })
    }

    eventCount(count = '-10800') {
        return new Promise((resolve, reject) => {
            //https://api.sofascore.com/api/v1/sport/-10800/event-count
            api.get(`${base}/api/${this.version || 'v1'}/sport/${count}/event-count`).then(rest => {
                return resolve(rest)
            }).catch(e => {
                return reject(e)
            })
        })
    }

    scheduledEvents(dateEvent = dateFormat(this.now, 'yyyy-mm-dd')) {
        return new Promise((resolve, reject) => {
            //https://api.sofascore.com/api/v1/sport/${this.sport}/scheduled-events/2021-07-12
            api.get(`${base}/api/${this.version || 'v1'}/sport/${this.sport}/scheduled-events/${dateEvent}`).then(rest => {
                return resolve(rest)
            }).catch(e => {
                return reject(e)
            })
        })
    }

    oddsProviders(lang = 'PT') {
        return new Promise((resolve, reject) => {
            //https://api.sofascore.com/api/v1/odds/providers/BR/web
            api.get(`${base}/api/${this.version || 'v1'}/odds/providers/${lang}/web`).then(rest => {
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
                api.get(`${base}/api/${this.version || 'v1'}/config/unique-tournaments/${lang}`).then(rest => {
                    return resolve(rest)
                }).catch(e => {
                    return reject(e)
                })
            })
        },
        uniqueTournamentsFootball(lang = 'PT') {
            return new Promise((resolve, reject) => {
                //https://api.sofascore.com/api/v1/config/unique-tournaments/BR/football
                api.get(`${base}/api/${this.version || 'v1'}/config/unique-tournaments/${lang}/football`).then(rest => {
                    return resolve(rest)
                }).catch(e => {
                    return reject(e)
                })
            })
        }
    }


    categories() {
        return new Promise((resolve, reject) => {
            //https://api.sofascore.com/api/v1/sport/${this.sport}/categories
            api.get(`${base}/api/${this.version || 'v1'}/sport/${this.sport}/categories`).then(rest => {
                return resolve(rest)
            }).catch(e => {
                return reject(e)
            })
        })
    }

    toDay(dateEvent = dateFormat(this.now, 'yyyy-mm-dd'), count = '-10800') {
        return new Promise((resolve, reject) => {
            //https://api.sofascore.com/api/v1/sport/${this.sport}/2021-07-12/-10800/categories
            api.get(`${base}/api/${this.version || 'v1'}/sport/${this.sport}/${dateEvent}/${count}/categories`).then(rest => {
                return resolve(rest)
            }).catch(e => {
                return reject(e)
            })
        })
    }

    trendingTopPlayers() {
        return new Promise((resolve, reject) => {
            //https://api.sofascore.com/api/v1/sport/${this.sport}/trending-top-players
            api.get(`${base}/api/${this.version || 'v1'}/sport/${this.sport}/trending-top-players`).then(rest => {
                return resolve(rest)
            }).catch(e => {
                return reject(e)
            })
        })
    }

    oddsFeaturedEvents(dateEvent = dateFormat(this.now, 'yyyy-mm-dd'), page = 1, rand = '-10800') {
        return new Promise((resolve, reject) => {
            //https://api.sofascore.com/api/v1/odds/1/featured-events/${this.sport}/2021-07-12/-10800
            api.get(`${base}/api/${this.version || 'v1'}/odds/${page}/featured-events/${this.sport}/${dateEvent}/${rand}`).then(rest => {
                return resolve(rest)
            }).catch(e => {
                return reject(e)
            })
        })
    }

    fracionalOdds(event = '', page = 1) {
        return new Promise((resolve, reject) => {
            //https://api.sofascore.com/api/v1/event/9223865/odds/1/featured
            api.get(`${base}/api/${this.version || 'v1'}/event/${event}/odds/${page}/featured`).then(rest => {
                return resolve(rest)
            }).catch(e => {
                return reject(e)
            })
        })
    }

    FootballFeaturedEvents(page) {
        return new Promise((resolve, reject) => {
            //https://api.sofascore.com/api/v1/odds/1/featured-events/football
            api.get(`${base}/api/${this.version || 'v1'}/odds/${page}/featured-events/football`).then(rest => {
                return resolve(rest)
            }).catch(e => {
                return reject(e)
            })
        })
    }

    heatMap(event = '', player = '') {
        return new Promise((resolve, reject) => {
            //https://api.sofascore.com/api/v1/event/9506640/player/309464/heatmap
            api.get(`${base}/api/${this.version || 'v1'}/event/${event}/player/${player}/heatmap`).then(rest => {
                return resolve(rest)
            }).catch(e => {
                return reject(e)
            })
        })
    }

    featuredOdds(event = '', page = 1) {
        return new Promise((resolve, reject) => {
            //https://api.sofascore.com/api/v1/event/9286604/odds/1/featured
            api.get(`${base}/api/${this.version || 'v1'}/event/${event}/odds/${page}/featured`).then(rest => {
                return resolve(rest)
            }).catch(e => {
                return reject(e)
            })
        })
    }

    allData(event = '', page = 1) {
        return new Promise((resolve, reject) => {
            //https://api.sofascore.com/api/v1/event/9476094/odds/1/all
            api.get(`${base}/api/${this.version || 'v1'}/event/${event}/odds/${page}/all`).then(rest => {
                return resolve(rest)
            }).catch(e => {
                return reject(e)
            })
        })
    }

    votes(event = '') {
        return new Promise((resolve, reject) => {
            //https://api.sofascore.com/api/v1/event/9223864/votes
            api.get(`${base}/api/${this.version || 'v1'}/event/${event}/votes`).then(rest => {
                return resolve(rest)
            }).catch(e => {
                return reject(e)
            })
        })
    }

    statistics(event = '') {
        return new Promise((resolve, reject) => {
            //https://api.sofascore.com/api/v1/event/9223864/statistics
            api.get(`${base}/api/${this.version || 'v1'}/event/${event}/statistics`).then(rest => {
                return resolve(rest)
            }).catch(e => {
                return reject(e)
            })
        })
    }

    liveEvents() {
        return new Promise((resolve, reject) => {
            //https://api.sofascore.com/api/v1/sport/football/events/live
            api.get(`${base}/api/v1/sport/${this.sport}/events/live`).then(rest => {
                return resolve(rest)
            }).catch(e => {
                return reject(e)
            })
        })
    }

    openUrl(url) {
        return new Promise((resolve, reject) => {
            api.get(url).then(rest => {
                return resolve(rest)
            }).catch(e => {
                return reject(e)
            })
        })
    }
}

export default Score;