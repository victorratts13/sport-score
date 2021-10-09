<p align="center">

<img src="https://github.com/victorratts13/sport-score/blob/main/assets/logo-sporte-score.png?raw=true" width="500" />

![version](https://img.shields.io/badge/version-1.0-brightgreen) ![env](https://img.shields.io/badge/lang-javascript-yellow) ![version](https://img.shields.io/badge/env-npm-red) 
</p>


## introduction

api for sports statistics and real-time bet365 games. With it you can choose sports data like:

- Basketball
- Tennis
- Table Tennis
- Hockey
- Esports
- Handball
- Volleyball
- Baseball
- American Football
- Motorsport
- Rugby
- More
- Darts
- Cricket
- Snooker
- Futsal
- Badminton
- Aussie Rules
- Beach Volleyball
- Waterpolo
- Floorball
- Bandy

Where all live data can be set from your current time in UTC format.

## install and implementation

you can apply this library to your project through the NPM or Yarn repository

```sh
~# npm install sport-score --save

```
and now import the library into your javascript project

```js
const score = require('sport-score');
const api = new score({
    version: 'v1',//version from API
    sport: 'football'//sport model
});
```

## get language

use this method for get automatic language and region.
>- define true or false for get local language

```js
api.getlang(true).then(rest => {
    console.log(rest) // callback
})
```

## get event number

use this method for get the number of live events

```js
api.eventCount().then(rest => {
    console.log(rest) // callback
})
```

## get scheduled Events

to get scheduled Events, you can use this:

```js
api.scheduledEvents('2021-05-06').then(rest => {
    console.log(rest)
})
```

## get event odds
use this method for get the odds information.

>- you can define language for callback.

```js
api.oddsProviders('PT').then(rest => {
    console.log(rest)
})
```

## get web configurations
use this method for get web configuration.

>- you can define language for callback.

```js
api.config.uniqueTournamentsWeb('BR').then(rest => {
    console.log(rest) // callback
})
```

## get Football configurations
use this method for get Football configuration.

>- you can define language for callback.

```js
api.config.uniqueTournamentsFootball('BR').then(rest => {
    console.log(rest) // callback
})
```

## get Football configurations
use this method for get Football configuration.

>- you can define language for callback.

```js
api.config.uniqueTournamentsFootball('BR').then(rest => {
    console.log(rest) // callback
})
```

## get sport detail

this method get all sport information with details from games.

```js
// for get Top games from today
api.trendingTopPlayers().then(rest => {
    console.log(rest)
})
// get all data from spect day (if null is from today for default). Define number of rows if you like.
api.toDay('2021-05-06', '1000').then(rest => {
    console.log(rest)
})
//get categories from all games.
api.categories().then(rest => {
    console.log(rest)
})
```

## get in live events

this method return all live events.

```js
api.live().then(rest => {
    console.log(rest)
})
```

## get Odds Information

to get odds information, you can use 2 methods:

```js
//this method returns all odd informations in live
api.oddsFeaturedEvents('2021-05-06', '1', '-10800').then(rest => {
    console.log(rest)
})
//this method return a spect odds for any event in live
api.fracionalOdds('9223864').then(rest => {
    console.log(rest)
})
```

## get statistic data

for get statistics and metrics for a any event, you can use this method:

```js
api.statistics('9223864').then(rest => {
    console.log(rest)
})
```

## probability win based in popular votes

to get a probability win statistic, you can use this method:

```js
api.votes('9223864').then(rest => {
    console.log(rest)
})

```

>- Note: this method return a popular vote for a event in live. This have a significant error margin.

## For more details.

Contact-me on telegram: ``@victorratts``


