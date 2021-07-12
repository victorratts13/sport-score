const score = require('./index');
const api = new score({
    version: 'v1',
    sport: 'football'
});

// api.getlang(true).then(rest => {
//     console.log(rest)
// })

// api.eventCount().then(rest => {
//     console.log(rest)
// })

// api.scheduledEvents().then(rest => {
//     console.log(rest)
// })

// api.oddsProviders('BR').then(rest => {
//     console.log(rest)
// })

// api.config.uniqueTournamentsWeb('BR').then(rest => {
//     console.log(rest)
// })

// api.config.uniqueTournamentsFootball('BR').then(rest => {
//     console.log(rest)
// })

// api.sport.futebol.trendingTopPlayers().then(rest => {
//     console.log(rest)
// })

api.oddsFeaturedEvents().then(rest => {
    console.log(rest)
})