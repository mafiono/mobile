export default {
  TOKEN_: '131893-un5NSiqwfoPzjW',
  TOKEN: '102925-ap8lmbNuSCIwqQ',
  SPORTS: [
    {
      SportId: '1',
      name: 'Soccer'
    },
    {
      SportId: '13',
      name: 'Tennis'
    },
    {
      SportId: '18',
      name: 'Basketball'
    },
    {
      SportId: '12',
      name: 'American football'
    },
    {
      SportId: '3',
      name: 'Cricket'
    }
  ],
  SPORTS_NAME: {
    '1': 'Soccer',
    '13': 'Tennis',
    '18': 'Basketball',
    '12': 'American football',
    '3': 'Cricket'
  },
  API: {
    LIVE_ENDPOINT: 'https://api.b365api.com/v3/events/inplay',
    PRE_ENDPOINT: 'https://api.b365api.com/v3/events/upcoming',
    ENDED_ENDPOINT: 'https://api.b365api.com/v1/event/view',
    ODDS_ENDPOINT: 'https://api.b365api.com/v2/event/odds',
    LEAGUE_ENDPOINT: 'https://api.b365api.com/v1/league',
    TEAM_ENDPOINT: 'https://api.b365api.com/v1/team',
    LIVE_TIME: '*/30 * * * * *',
    UPCOMIN_TIME: '*/60 * * * * *',
    END_TIME: '*/60 * * * * *',
    PRE_TIME: '*/30 * * * *',
    LEAGUE_TIME: '*/60 * * * *',
    RESULT_TIME: '*/2 * * * *'
    // LIVE_TIME: '*/5 * * * * *',
    // UPCOMIN_TIME: '*/30 * * * * *',
    // PRE_TIME: '*/30 * * * *',
    // LEAGUE_TIME: '*/60 * * * *',
    // RESULT_TIME: '*/2 * * * *'
  }
};