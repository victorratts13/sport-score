const score = require('./index');
const api = new score({
    version: 'v1',
    sport: 'football'
});


// api.statistics(9223864).then(rest => {
//     for(var arr of rest.statistics){
//         if(arr.period == 'ALL'){
//             console.log(arr)
//         }
//     }
// })

// api.votes('9223864').then(rest => {
//     console.log(rest)
// })

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

// api.oddsFeaturedEvents().then(rest => {
//     console.log(rest)
// })