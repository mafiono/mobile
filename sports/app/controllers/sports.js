import moment from "moment";
import request from "request";
import { CronJob } from "cron";
import { Op } from '@sequelize/core';
import sequelize from '../sequelize/index.js';
import config from "../config/index.js";
import countries from "../config/countries.js";

const token = config.TOKEN;
const DB = sequelize.models
export const start = async () => {
  getLiveStart();
  // getUpcomingStart();
  // getPreStart();
  // getLiveOddStart();
  // getPreOddStart();
  // gameEnds();
  // Leagues();
  // saveCountry();
}

//Get League Start 
export const Leagues = () => {
  try {
    console.log("League");
    getLeague();
    const job1 = new CronJob(config.API.LEAGUE_TIME, () => {
      getLeague();
      console.log('League ', moment().format("YYYY-MM-DD hh:mm:ss"));
    });
    job1.start();
  } catch (error) {
    console.log(`getLeague server error`, error);
  }
};

const getLeague = async () => {
  const sportslist = config.SPORTS;
  for (let key in sportslist) {
    await DB.w_sports_league.destroy({ where: { sport_id: sportslist[key].SportId } });
    getLeaguePage(sportslist[key].SportId);
  }
}

const getLeaguePage = (sport_id) => {
  const options = {
    method: "GET",
    url: config.API.LEAGUE_ENDPOINT,
    qs: { token, sport_id },
    headers: { "Content-Type": "application/json" },
    body: { page: 1, skip_markets: 1 },
    json: true,
  };

  request(options, (error, response, body) => {
    if (error) {
      console.log('get League page error');
    } else {
      const data = body;
      if (!data || !data?.pager) return console.log(data);
      const pager = data.pager;
      const page = Math.ceil(pager.total / pager.per_page);
      for (let i = 0; i < page; i++) {
        getLeagueEvents(sport_id, i + 1);
      }
    }
  });
}

const getLeagueEvents = (sport_id, page) => {
  const options = {
    method: "GET",
    url: config.API.LEAGUE_ENDPOINT,
    headers: { "Content-Type": "application/json" },
    qs: { token, sport_id },
    body: { page },
    json: true,
  };
  request(options, async (error, response, body) => {
    if (error) {
      console.log('get league error : ', console.log(error));
    } else {
      if (body && body.success && body.results.length) {
        const results = body.results;
        for (const i in results) {
          try {
            if (results[i].cc) {
              await DB.w_sports_league.create({ ...results[i], sport_id });
            }
          } catch (error) {
            console.log(error.message, 'save league data');
          }
        }
      }
    }
  });
}
//Get League End

//Get Live Match Start
export const getLiveStart = () => {
  try {
    getLiveEvents();
    const job1 = new CronJob(config.API.LIVE_TIME, () => {
      getLiveEvents();
      console.log('Live ', moment().format("YYYY-MM-DD hh:mm:ss"));
    });
    job1.start();
  } catch (error) {
    console.log(`getLiveRealTime server error:`, error);
  }
};

const getLiveEvents = async () => {
  const sportslist = config.SPORTS;
  for (const key in sportslist) {
    getInplayPage(sportslist[key].SportId);
  }
};

const getInplayPage = (sport_id) => {
  const options = {
    method: "GET",
    url: config.API.LIVE_ENDPOINT,
    qs: { token, sport_id, skip_esports: "Esports" },
    headers: { "Content-Type": "application/json" },
    body: { page: 1, skip_markets: 1 },
    json: true,
  };

  request(options, (error, response, body) => {
    if (error) {
      console.log('get LIve page error');
    } else {
      const data = body;
      if (!data || !data?.pager) return console.log(data);
      const pager = data.pager;
      const page = Math.ceil(pager.total / pager.per_page);
      for (let i = 0; i < page; i++) {
        getInplayEvents(sport_id, i + 1);
      }
    }
  });
};

const getInplayEvents = (sport_id, page) => {
  const options = {
    method: "GET",
    url: config.API.LIVE_ENDPOINT,
    headers: { "Content-Type": "application/json" },
    qs: { token, sport_id, skip_esports: "Esports" },
    body: { page },
    json: true,
  };
  request(options, async (error, response, body) => {
    if (error) {
      console.log('get live error')
    } else {
      if (body && body.success && body.results.length) {
        const results = body.results;
        for (const i in results) {
          const result = results[i];
          if (
            result.away &&
            result.home &&
            result.time &&
            result.time_status !== 2 &&
            result.time_status !== 3
          ) {
            try {
              const date = moment().add(7, "days").valueOf();
              const time = new Date(result.time * 1000).valueOf();
              // const existLeague = await DB.w_sports_league.findAll({ where: { id: result.league.id } });
              // existLeague.length && 
              if (time < date) {
                const exist = await DB.w_sports.findAll({ where: { id: result.id } });
                if (exist.length) {
                  await DB.w_sports.update({ ...result, league_id: result.league.id, sport_name: config.SPORTS_NAME[result.sport_id] }, { where: { id: result.id } });
                } else {
                  await DB.w_sports.create({ ...result, league_id: result.league.id, sport_name: config.SPORTS_NAME[result.sport_id] });
                }
              }
            } catch (error) {
              console.log(error.message);
            }
          }
        }
      }
    }
  });
};
//Get Live Match End


//Get Upcomming Start
export const getUpcomingStart = () => {
  try {
    getUpcoming();
    const job2 = new CronJob(config.API.UPCOMIN_TIME, () => {
      getUpcoming();
      console.log('Upcomming ', moment().format("YYYY-MM-DD hh:mm:ss"));
    });
    job2.start();
  } catch (error) {
    console.log(`getUpcomingRealTime server error:`, error);
  }
};

const getUpcoming = async () => {
  const sportslist = config.SPORTS;
  for (const key in sportslist) {
    await getUpcomingPage(sportslist[key].SportId, moment().format("YYYYMMDD"));
  }
};
//Get Upcomming End

//Get Pre Match Start
export const getPreStart = () => {
  try {
    getPreEvents();
    const job2 = new CronJob(config.API.PRE_TIME, () => {
      getPreEvents();
      console.log('Upcomming ', moment().format("YYYY-MM-DD hh:mm:ss"));
    });
    job2.start();
  } catch (error) {
    console.log(`getPreRealTime server error:`, error);
  }
};

const getPreEvents = async () => {
  const sportslist = config.SPORTS;
  for (const key in sportslist) {
    await getUpcomingPage(
      sportslist[key].SportId,
      moment().add(1, "days").format("YYYYMMDD")
    );
    await getUpcomingPage(
      sportslist[key].SportId,
      moment().add(2, "days").format("YYYYMMDD")
    );
    await getUpcomingPage(
      sportslist[key].SportId,
      moment().add(3, "days").format("YYYYMMDD")
    );
    // await getUpcomingPage(
    //   sportslist[key].SportId,
    //   moment().add(4, "days").format("YYYYMMDD")
    // );
    // await getUpcomingPage(
    //   sportslist[key].SportId,
    //   moment().add(5, "days").format("YYYYMMDD")
    // );
    // await getUpcomingPage(
    //   sportslist[key].SportId,
    //   moment().add(6, "days").format("YYYYMMDD")
    // );
    // await getUpcomingPage(
    //   sportslist[key].SportId,
    //   moment().add(7, "days").format("YYYYMMDD")
    // );
  }
};

const getUpcomingPage = (sport_id, day) => {
  return new Promise(async (resolve, reject) => {
    setTimeout(() => {
      resolve("success");
    }, 8500);
    const options = {
      method: "GET",
      url: config.API.PRE_ENDPOINT,
      qs: { token, sport_id, skip_esports: "Esports" },
      headers: { "Content-Type": "application/json" },
      body: { page: 1, skip_markets: 1, day },
      json: true,
    };
    request(options, (error, response, body) => {
      if (error) {
      } else {
        const data = body;
        if (!data || !data?.pager) return console.log(data);
        const pager = data.pager;
        const page = Math.ceil(pager.total / pager.per_page);
        for (let i = 0; i < page; i++) {
          getUpcomingEvents(sport_id, i + 1, day);
        }
      }
    });
  });
};

const getUpcomingEvents = (sport_id, page, day) => {
  const options = {
    method: "GET",
    url: config.API.PRE_ENDPOINT,
    headers: { "Content-Type": "application/json" },
    qs: { token, sport_id, skip_esports: "Esports" },
    body: { page, day },
    json: true,
  };
  request(options, async (error, response, body) => {
    if (error) {
    } else {
      if (body && body.success && body.results.length) {
        const results = body.results;
        for (const i in results) {
          const result = results[i];
          if (
            result.away &&
            result.home &&
            result.time &&
            result.time_status != 2 &&
            result.time_status != 3
          ) {
            try {
              const date = moment().add(7, "days").valueOf();
              const time = new Date(result.time * 1000).valueOf();
              // const existLeague = await DB.w_sports_league.findAll({ where: { id: result.league.id } });
              // existLeague.length && 
              if (time < date) {
                const exist = await DB.w_sports.findAll({ where: { id: result.id } });
                if (exist.length) {
                  await DB.w_sports.update({ ...result, league_id: result.league.id, sport_name: config.SPORTS_NAME[result.sport_id] }, { where: { id: result.id } });
                } else {
                  await DB.w_sports.create({ ...result, league_id: result.league.id, sport_name: config.SPORTS_NAME[result.sport_id] });
                }
              }
            } catch (error) {
            }
          }
        }
      }
    }
  });
};
//Get Pre Match End

//GET Live Odd Start 
export const getLiveOddStart = () => {
  try {
    getLiveOdd();
    const job1 = new CronJob(config.API.LIVE_TIME, () => {
      getLiveOdd();
      console.log('Live Odd: ', moment().format("YYYY-MM-DD hh:mm:ss"));
    });
    job1.start();
  } catch (error) {
    console.log(`getLiveOddStart server error`, error);
  }
};

const getLiveOdd = async () => {
  const sportsmatchs = await DB.w_sports.findAll({ where: { time_status: 1 } });
  for (const key in sportsmatchs) {
    await getOdds(sportsmatchs[key].id, true);
  }
};
//GET Live Odd End

//Get Upcomming Odd Start
export const getPreOddStart = () => {
  try {
    getPreOdd();
    const job2 = new CronJob(config.API.UPCOMIN_TIME, () => {
      getPreOdd();
      console.log('cOdd',
        moment().format("YYYY-MM-DD hh:mm:ss"),
      );
    });
    job2.start();
  } catch (error) {
    console.log(`odds2 server error`, error);
  }
};

const getPreOdd = async () => {
  const lte = Math.floor(moment().add(1, "days").valueOf());
  const sportsmatchs = await DB.w_sports.findAll({ where: { time_status: 0, time: { [Op.lte]: lte } } });
  for (const key in sportsmatchs) {
    await getOdds(sportsmatchs[key].id, false);
  }
};
//Get Upcomming Odd End

//Get Ended
export const gameEnds = () => {
  try {
    console.log("server on: ends1");
    getGameEnd();
    const job1 = new CronJob(config.API.END_TIME, () => {
      getGameEnd();
      console.log('end: ',
        moment().format("YYYY-MM-DD hh:mm:ss"),
      );
    });
    job1.start();
  } catch (error) {
    console.log(`ends1 server error`, error);
  }
};

const getGameEnd = async () => {
  const sportsmatchs = await DB.w_sports.findAll({ attributes: ['id'], where: { time_status: 3 } })
  const matchIds = sportsmatchs.map((e) => e.id);
  const id_count = 10;
  let pages = Math.ceil(matchIds.length / id_count);
  let sendEventIds = [];
  for (let i = 0; i < pages; i++) {
    let matchId = [];
    if (i === 0) {
      matchId = matchIds.slice(0, i + 1 * id_count);
    } else {
      matchId = matchIds.slice(i * id_count, (i + 1) * id_count);
    }
    sendEventIds.push(matchId.join(","));
  }
  for (let i in sendEventIds) {
    getEndedEvents(sendEventIds[i]);
  }
};

// const getEnds2 = async () => {
//   const lte = Math.floor(moment().add(1, "days").valueOf() / 1000);
//   const sportsmatchs = await SportsMatchs.find({
//     time_status: { $ne: 1 },
//     time: { $lte: lte },
//   }).select({ id: 1, _id: 0 });
//   const matchIds = sportsmatchs.map((e) => e.id);
//   const id_count = 10;
//   let pages = Math.ceil(matchIds.length / id_count);
//   let sendEventIds = [] as any;
//   for (let i = 0; i < pages; i++) {
//     let matchId = [] as any;
//     if (i === 0) {
//       matchId = matchIds.slice(0, i + 1 * id_count);
//     } else {
//       matchId = matchIds.slice(i * id_count, (i + 1) * id_count);
//     }
//     sendEventIds.push(matchId.join(","));
//   }
//   for (let i in sendEventIds) {
//     getEndedEvents(sendEventIds[i]);
//   }
// };

// const getEnds3 = async () => {
//   const gte = Math.floor(moment().add(1, "days").valueOf() / 1000);
//   const sportsmatchs = await SportsMatchs.find({
//     time_status: { $ne: 1 },
//     time: { $gte: gte },
//   }).select({ id: 1, _id: 0 });
//   const matchIds = sportsmatchs.map((e) => e.id);
//   const id_count = 10;
//   let pages = Math.ceil(matchIds.length / id_count);
//   let sendEventIds = [] as any;
//   for (let i = 0; i < pages; i++) {
//     let matchId = [] as any;
//     if (i === 0) {
//       matchId = matchIds.slice(0, i + 1 * id_count);
//     } else {
//       matchId = matchIds.slice(i * id_count, (i + 1) * id_count);
//     }
//     sendEventIds.push(matchId.join(","));
//   }
//   for (let i in sendEventIds) {
//     getEndedEvents(sendEventIds[i]);
//   }
// };

// export const getEnds = async () => {
//   const sportsmatchs = await SportsBetting.aggregate([
//     { $match: { status: "BET" } },
//     { $group: { _id: "$eventId" } },
//   ]);
//   const matchIds = sportsmatchs.map((e) => e._id);
//   const id_count = 10;
//   let pages = Math.ceil(matchIds.length / id_count);
//   let sendEventIds = [] as any;
//   for (let i = 0; i < pages; i++) {
//     let matchId = [] as any;
//     if (i === 0) {
//       matchId = matchIds.slice(0, i + 1 * id_count);
//     } else {
//       matchId = matchIds.slice(i * id_count, (i + 1) * id_count);
//     }
//     sendEventIds.push(matchId.join(","));
//   }
//   for (let i in sendEventIds) {
//     getEndedEvents(sendEventIds[i]);
//   }
// };

export const getEndedEvents = (event_id) => {
  const options = {
    method: "GET",
    url: config.API.ENDED_ENDPOINT,
    headers: { "Content-Type": "application/json" },
    qs: { token, event_id, skip_esports: "Esports" },
    json: true,
  };
  request(options, async (error, response, body) => {
    if (error) {
    } else {
      if (body && body.success && body.results.length) {
        const results = body.results;
        for (const i in results) {
          await updateEndedEvents(results[i]);
        }
      }
    }
  });
};

const updateEndedEvents = (result) => {
  return new Promise(async (resolve, reject) => {
    if (!result) return resolve("error");
    setTimeout(() => {
      resolve("success");
    }, 20);
    try {
      const time_status = Number(result.time_status);
      const sportslist = config.SPORTS;
      if (!result.id) {
        return console.log(`result.id => null ${result.id}`);
      } else if (time_status === 0 || time_status === 1) {
        const id = result.id;
        await DB.w_sports.update({ ...result, league_id: result.league.id, isLive: time_status, time: result.time, sport_name: config.SPORTS_NAME[result.sport_id] }, { where: { id } });
      } else {
        const id = Number(result.id);
        if (time_status == 3) {
          // await DB.w_sports.destroy({ where: { id } });
          const bets = await DB.w_sports_bet.findAll({ where: { 'eventId': id } });
          if (bets.length) {
            for (let item of bets) {
              makeBetResult(item, result);
            }
          }
        }
        // console.log('remove: ', id, bets);
      }
    } catch (error) {
      console.log(`updateEndedEvents error`, error);
    }
  });
};


//Others Function
export const filterOdds = async (data) => {
  return new Promise(async (resolve, reject) => {
    let odds = {};
    for (const i in data) {
      if (data[i] && data[i].length) {
        odds[i] = data[i].sort(
          (a, b) => Number(b.add_time) - Number(a.add_time)
        )[0];
      }
    }
    resolve(odds);
  });
};

const filterLiveOdds = async (odds, oldOdds) => {
  return new Promise(async (resolve, reject) => {
    if (!odds) {
      resolve({});
    }
    for (const i in odds) {
      if (!oldOdds) {
        odds[i].notUpdate = 0;
      } else {
        try {
          let notUpdate =
            oldOdds[i] && oldOdds[i] && oldOdds[i]?.notUpdate
              ? oldOdds[i].notUpdate
              : 0;
          if (odds[i]?.time_str && odds[i].time_str != oldOdds[i].time_str) {
            notUpdate = 0;
          } else if (
            odds[i]?.add_time &&
            odds[i].add_time != oldOdds[i].add_time
          ) {
            notUpdate = 0;
          } else {
            notUpdate++;
          }
          odds[i].notUpdate = notUpdate;
        } catch (error) {
          odds[i].notUpdate = 0;
        }
      }
    }
    resolve(odds);
  });
};

const getOdds = (event_id, isLive, time = 20) => {
  return new Promise(async (resolve, reject) => {
    if (event_id == 0) return resolve("error");
    setTimeout(() => {
      resolve(event_id);
    }, time);
    const options = {
      method: "GET",
      url: config.API.ODDS_ENDPOINT,
      headers: { "Content-Type": "application/json" },
      qs: { event_id, token, skip_esports: "Esports" },
      json: true,
    };
    request(options, async (error, response, body) => {
      if (error) {
        console.log(error)
      } else {
        if (body && body.success && body.results && body.results.odds) {
          try {
            let newOdds = await filterOdds(body.results.odds);
            if (isLive) {
              const sportsmatchs = await DB.w_sports.findOne({ where: { id: event_id } });
              if (Object.keys(sportsmatchs).length) {
                const odds = await filterLiveOdds(newOdds, sportsmatchs.odds);
                await DB.w_sports.update({ odds }, { where: { id: event_id } });
              }
            } else {
              await DB.w_sports.update({ odds: newOdds }, { where: { id: event_id } });
            }
          } catch (error) {
            console.log(`getOdds update error`, error);
          }
        }
      }
    });
  });
};

//API Functions
export const getLeagueApi = async (req, res) => {
  const group = await DB.w_sports.findAll({ attributes: ['league_id'], group: 'league_id' });
  let inCondition = [];
  for (let item of group) {
    inCondition.push(item.league_id);
  }

  const attr = ['w_sports_leagues._id', 'w_sports_leagues.id', 'w_sports_leagues.sport_id', 'w_sports_leagues.name', 'w_sports_leagues.cc', 'w_sports_leagues.has_toplist', 'w_sports_countries.country']
  const [results, metadata] = await sequelize.query(`SELECT ${attr.join()} FROM w_sports_leagues LEFT JOIN w_sports_countries ON w_sports_countries.cc = w_sports_leagues.cc WHERE w_sports_leagues.id In (${inCondition.join()})`);
  return res.json({ status: 200, data: results });
}

const saveCountry = async () => {
  for (let item of countries) {
    await DB.w_sports_country.create({ cc: item.cc, country: item.name });
  }
}

//Bet Settlement
/**
 * Match Winner 2-Way
 */
const get1X2 = ({ h_score, a_score, oddType }) => {
  if (h_score === a_score && oddType === "draw") {
    return "WIN";
  } else if (h_score > a_score && oddType === "home") {
    return "WIN";
  } else if (h_score < a_score && oddType === "away") {
    return "WIN";
  } else {
    return "LOST";
  }
};

/**
 * Draw No Bet (Cricket)
 */
const getDrawNoBet = ({ h_score, a_score, oddType }) => {
  if (h_score === a_score) {
    return "REFUND";
  } else if (h_score > a_score && oddType === "home") {
    return "WIN";
  } else if (h_score < a_score && oddType === "away") {
    return "WIN";
  } else {
    return "LOST";
  }
};

/**
 * Asian Handicap
 */
const getHandicap = ({ h_score, a_score, oddType, handicap }) => {
  const isFavorite = Number(handicap) > 0 ? true : false;
  const _handicap = Math.abs(handicap);
  let d_score = Math.floor(_handicap);
  let handicap_od = d_score < 1 ? _handicap : _handicap % d_score;
  if (oddType === "home") {
    handicap_od = isFavorite ? handicap_od : handicap_od * -1;
    h_score = h_score + (isFavorite ? d_score : d_score * -1);
  } else if (oddType === "away") {
    let temp = h_score;
    handicap_od = isFavorite ? handicap_od * -1 : handicap_od;
    h_score = a_score - (isFavorite ? d_score : d_score * -1);
    a_score = temp;
  }
  if (handicap_od === 0.25) {
    if (h_score > a_score) {
      return "WIN";
    } else if (h_score === a_score) {
      return "HALF_WIN";
    } else {
      return "LOST";
    }
  } else if (handicap_od === 0.5) {
    if (h_score > a_score) {
      return "WIN";
    } else if (h_score === a_score) {
      return "WIN";
    } else {
      return "LOST";
    }
  } else if (handicap_od === 0.75) {
    if (h_score > a_score) {
      return "WIN";
    } else if (h_score === a_score) {
      return "WIN";
    } else if (h_score + 1 === a_score) {
      return "HALF_LOST";
    } else {
      return "LOST";
    }
  } else if (handicap_od === -0.25) {
    if (h_score > a_score) {
      return "WIN";
    } else if (h_score === a_score) {
      return "HALF_LOST";
    } else {
      return "LOST";
    }
  } else if (handicap_od === -0.5) {
    if (h_score > a_score) {
      return "WIN";
    } else {
      return "LOST";
    }
  } else if (handicap_od === -0.75) {
    if (h_score > a_score + 1) {
      return "WIN";
    } else if (h_score === a_score + 1) {
      return "HALF_WIN";
    } else {
      return "LOST";
    }
  } else {
    if (h_score > a_score) {
      return "WIN";
    } else if (h_score === a_score) {
      return "REFUND";
    } else {
      return "LOST";
    }
  }
};

/**
 * Over/Under
 */
const getOverUnder = ({ t_score, handicap, oddType }) => {
  handicap = Math.abs(handicap);
  let d_score = Math.floor(handicap);
  let over_under = d_score < 1 ? handicap : handicap % d_score;
  if (oddType === "under") {
    if (over_under === 0.25) {
      if (t_score < d_score) {
        return "WIN";
      } else if (t_score === d_score) {
        return "HALF_WIN";
      } else {
        return "LOST";
      }
    } else if (over_under === 0.5) {
      if (t_score <= d_score) {
        return "WIN";
      } else {
        return "LOST";
      }
    } else if (over_under === 0.75) {
      if (t_score <= d_score) {
        return "WIN";
      } else if (t_score === d_score + 1) {
        return "HALF_LOST";
      } else {
        return "LOST";
      }
    } else {
      if (t_score < d_score) {
        return "WIN";
      } else if (t_score === d_score) {
        return "REFUND";
      } else {
        return "LOST";
      }
    }
  } else if (oddType === "over") {
    if (over_under === 0.25) {
      if (t_score > d_score) {
        return "WIN";
      } else if (t_score === d_score) {
        return "HALF_LOST";
      } else {
        return "LOST";
      }
    } else if (over_under === 0.5) {
      if (t_score > d_score) {
        return "WIN";
      } else {
        return "LOST";
      }
    } else if (over_under === 0.75) {
      if (t_score > d_score + 1) {
        return "WIN";
      } else if (t_score === d_score + 1) {
        return "HALF_WIN";
      } else {
        return "LOST";
      }
    } else {
      if (t_score > d_score) {
        return "WIN";
      } else if (t_score === d_score) {
        return "REFUND";
      } else {
        return "LOST";
      }
    }
  } else {
    return "";
  }
};

const getFScore = (scores) => {
  return scores[Object.keys(scores).sort().reverse()[0]];
};

const getScore = (scores) => {
  let home = 0,
    away = 0;
  for (const i in scores) {
    if (Number(scores[i].home) > Number(scores[i].away)) {
      home++;
    } else if (Number(scores[i].home) < Number(scores[i].away)) {
      away++;
    }
  }
  return { home, away };
};

const getScores = ({ SportId, scores, ss }) => {
  let h_score = 0,
    a_score = 0,
    t_score = 0;

  if (SportId === 1) {
    if (Object.keys(scores).length === 3) {
      let h_score = Object.values(scores)
        .slice(0, 2)
        .reduce((sum, { home }) => (sum += Number(home)), 0);
      let a_score = Object.values(scores)
        .slice(0, 2)
        .reduce((sum, { away }) => (sum += Number(away)), 0);
      t_score = Number(h_score) + Number(a_score);
      return { h_score, a_score, t_score, state: true };
    } else {
      const f_score = getFScore(scores);
      h_score = Number(f_score.home);
      a_score = Number(f_score.away);
      t_score = h_score + a_score;
      return { h_score, a_score, t_score, state: true };
    }
  } else if (
    SportId === 12 ||
    SportId === 17 ||
    SportId === 18 ||
    SportId === 19 ||
    SportId === 78
  ) {
    const f_score = getFScore(scores);
    h_score = Number(f_score.home);
    a_score = Number(f_score.away);
    t_score = h_score + a_score;
    return { h_score, a_score, t_score, state: true };
  } else if (SportId === 13) {
    const f_score = getScore(scores);
    if (f_score.home === f_score.away) {
      return { h_score, a_score, t_score, state: false };
    } else {
      const home_score = Object.values(scores).reduce(
        (sum, { home }) => (sum += Number(home)),
        0
      );
      const away_score = Object.values(scores).reduce(
        (sum, { away }) => (sum += Number(away)),
        0
      );
      h_score = Number(f_score.home);
      a_score = Number(f_score.away);
      t_score = home_score + away_score;
      return { h_score, a_score, t_score, state: true };
    }
  } else if (
    SportId === 91 ||
    SportId === 92 ||
    SportId === 94 ||
    SportId === 95
  ) {
    const home_score = Object.values(scores).reduce(
      (sum, { home }) => (sum += Number(home)),
      0
    );
    const away_score = Object.values(scores).reduce(
      (sum, { away }) => (sum += Number(away)),
      0
    );
    const f_score = getScore(scores);
    h_score = Number(f_score.home);
    a_score = Number(f_score.away);
    t_score = home_score + away_score;
    return { h_score, a_score, t_score, state: true };
  } else if (
    SportId === 8 ||
    SportId === 9 ||
    SportId === 14 ||
    SportId === 15 ||
    SportId === 16 ||
    SportId === 36 ||
    SportId === 66 ||
    SportId === 83 ||
    SportId === 90 ||
    SportId === 107 ||
    SportId === 110 ||
    SportId === 151
  ) {
    const s = ss.split("-");
    h_score = Number(s[0]);
    a_score = Number(s[1]);
    t_score = h_score + a_score;
    return { h_score, a_score, t_score, state: true };
  } else if (SportId === 3) {
    const s1 = ss.split("-");
    const s2 = ss.split(",");
    if (s1[0] && s1[1]) {
      h_score = Number(s1[0].split("/")[0]);
      a_score = Number(s1[1].split("/")[0]);
      t_score = h_score + a_score;
      return { h_score, a_score, t_score, state: true };
    } else if (s2[0] && s2[1]) {
      h_score = Number(s2[0].split("/")[0]);
      a_score = Number(s2[1].split("/")[0]);
      t_score = h_score + a_score;
      return { h_score, a_score, t_score, state: true };
    } else {
      return { h_score, a_score, t_score, state: false };
    }
  } else if (SportId === 75) {
    return { h_score, a_score, t_score, state: false };
  } else {
    return { h_score, a_score, t_score, state: false };
  }
};

const getCorner = (scores) => {
  if (scores && scores.length) {
    return Number(scores[0]) + Number(scores[1]);
  } else {
    return false;
  }
};

const getSHScore = (scores) => {
  const f_score = scores[Object.keys(scores).sort()[0]];
  const home = Number(f_score.home);
  const away = Number(f_score.away);
  return { home, away, total: home + away };
};

const getBHScore = (scores) => {
  let f_score = null;
  if (!scores) {
    f_score = null;
  } else if (Object.keys(scores).length >= 6) {
    f_score = scores["3"];
  } else if (Object.keys(scores).length >= 3) {
    f_score = scores["1"];
  }
  if (f_score) {
    const home = Number(f_score.home);
    const away = Number(f_score.away);
    return { home, away, total: home + away, state: true };
  } else {
    return { home: 0, away: 0, total: 0, state: false };
  }
};

const getBQScore = (scores, quarter) => {
  let f_score = {
    home: 0,
    away: 0,
  };
  let state = true;
  if (quarter === "1" || quarter === "0") {
    f_score = scores["1"];
  } else if (quarter === "2") {
    f_score = scores["2"];
  } else if (quarter === "3") {
    f_score = scores["4"];
  } else if (quarter === "4") {
    f_score = scores["5"];
  }
  if (f_score.home === 0 && f_score.away === 0) {
    state = false;
  }
  const home = Number(f_score.home);
  const away = Number(f_score.away);
  return { home, away, total: home + away, state };
};

const getHockeyScore = (scores) => {
  let h_score = Object.values(scores)
    .slice(0, 3)
    .reduce((sum, { home }) => (sum += Number(home)), 0);
  let a_score = Object.values(scores)
    .slice(0, 3)
    .reduce((sum, { away }) => (sum += Number(away)), 0);
  return { h_score, a_score };
};

const getProfit = ({ status, bet }) => {
  if (status === "WIN") {
    return bet.stake * bet.odds;
  } else if (status === "LOST") {
    return bet.stake * -1;
  } else if (status === "REFUND") {
    return bet.stake;
  } else if (status === "HALF_WIN") {
    return (bet.stake * bet.odds) / 2 + bet.stake / 2;
  } else if (status === "HALF_LOST") {
    return (bet.stake / 2) * -1;
  }
};

export const bettingSettled = async (bet, data) => {
  if (!bet || !data) {
    return { profit: 0, status: "", scores: {}, state: false };
  }
  const oddType = bet.oddType;
  const SportId = bet.SportId;
  const marketId = bet.marketId;
  let status = "";
  const { h_score, a_score, t_score, state } = getScores({
    SportId,
    scores: data.scores,
    ss: data.ss,
  });
  if (state) {
    if (marketId.indexOf("_1") !== -1 || marketId === "13_4") {
      if (SportId === 1) {
        status = get1X2({ h_score, a_score, oddType });
      } else if (SportId === 17) {
        const { h_score, a_score } = getHockeyScore(data.scores);
        status = get1X2({ h_score, a_score, oddType });
      } else {
        status = get1X2({ h_score, a_score, oddType });
      }
    } else if (marketId.indexOf("_2") !== -1) {
      const handicap = bet.handicap;
      // const handicap = getHandicapData(bet.oddData.handicap);
      status = getHandicap({ h_score, a_score, oddType, handicap });
    } else if (marketId.indexOf("_3") !== -1) {
      const handicap = bet.handicap;
      // const handicap = getHandicapData(bet.oddData.handicap);
      status = getOverUnder({ t_score, oddType, handicap });
    } else if (marketId === "1_4") {
      const corner = getCorner(data.stats?.corners);
      const handicap = bet.handicap;
      // const handicap = getHandicapData(bet.oddData.handicap);
      if (corner) {
        status = getOverUnder({ t_score: corner, oddType, handicap });
      } else {
        status = "REFUND";
      }
    } else if (marketId === "1_5") {
      const { home, away } = getSHScore(data.scores);
      const handicap = bet.handicap;
      // const handicap = getHandicapData(bet.oddData.handicap);
      status = getHandicap({ h_score: home, a_score: away, oddType, handicap });
    } else if (marketId === "1_6") {
      const { total } = getSHScore(data.scores);
      const handicap = bet.handicap;
      // const handicap = getHandicapData(bet.oddData.handicap);
      status = getOverUnder({ t_score: total, oddType, handicap });
    } else if (marketId === "1_7") {
      const corner = getCorner(data.stats.corner_h);
      const handicap = bet.handicap;
      // const handicap = getHandicapData(bet.oddData.handicap);
      if (corner) {
        status = getOverUnder({ t_score: corner, oddType, handicap });
      } else {
        status = "REFUND";
      }
    } else if (marketId === "1_8") {
      const { home, away } = getSHScore(data.scores);
      status = get1X2({ h_score: home, a_score: away, oddType });
    } else if (marketId === "18_4") {
      const { home, away, state } = getBHScore(data.scores);
      if (state) {
        status = get1X2({ h_score: home, a_score: away, oddType });
      } else {
        status = "REFUND";
      }
    } else if (marketId === "18_5") {
      const { home, away, state } = getBHScore(data.scores);
      if (state) {
        const handicap = bet.handicap;
        // const handicap = getHandicapData(bet.oddData.handicap);
        status = getHandicap({
          h_score: home,
          a_score: away,
          oddType,
          handicap,
        });
      } else {
        status = "REFUND";
      }
    } else if (marketId === "18_6") {
      const { total, state } = getBHScore(data.scores);
      if (state) {
        const handicap = bet.handicap;
        // const handicap = getHandicapData(bet.oddData.handicap);
        status = getOverUnder({ t_score: total, oddType, handicap });
      } else {
        status = "REFUND";
      }
    } else if (marketId === "18_7") {
      const { home, away, state } = getBQScore(data.scores, bet.oddData.q);
      if (state) {
        status = get1X2({ h_score: home, a_score: away, oddType });
      } else {
        status = "REFUND";
      }
    } else if (marketId === "18_8") {
      const { home, away, state } = getBQScore(data.scores, bet.oddData.q);
      if (state) {
        const handicap = bet.handicap;
        // const handicap = getHandicapData(bet.oddData.handicap);
        status = getHandicap({
          h_score: home,
          a_score: away,
          oddType,
          handicap,
        });
      } else {
        status = "REFUND";
      }
    } else if (marketId === "18_9") {
      const { total, state } = getBQScore(data.scores, bet.oddData.q);
      if (state) {
        const handicap = bet.handicap;
        // const handicap = getHandicapData(bet.oddData.handicap);
        status = getOverUnder({ t_score: total, oddType, handicap });
      } else {
        status = "REFUND";
      }
    } else if (marketId === "3_4") {
      status = getDrawNoBet({ h_score, a_score, oddType });
    } else {
      status = "REFUND";
    }
    const profit = getProfit({ status, bet });
    const scores = { home: h_score, away: a_score, total: t_score };
    return { profit, status, scores, state };
  } else {
    console.log(bet.eventId, bet.SportId);
    return { profit: 0, status: "", scores: {}, state: false };
  }
};

const makeBetResult = async (bet, data) => {
  const result = await bettingSettled(bet, data);
  await DB.w_sports_bet.update({ profit: result.profit, status: result.status }, { where: { id: bet.id } });

  if (bet.betType == 'single') {
    const user = await DB.w_users.findOne({ attributes: ['balance'], where: { id: bet.user_id } });
    if (result.status !== 'LOST') {
      const balance = Number(user.balance) + Number(result.profit);
      await DB.w_users.update({ balance }, { where: { id: bet.user_id } });
    }
  } else {
    const multi = await DB.w_sports_bet.findAll({ where: { betsId: bet.betsId } });
    let flag = 1, aCount = 0, wCount = 0;
    for (let item of multi) {
      if (item.status == 'BET') {
        flag = 0;
        return;
      } else if (item.status == 'WIN') {
        wCount++;
      }
      aCount++;
    }
    if (flag) {
      if (aCount == wCount) {
        const user = await DB.w_users.findOne({ attributes: ['balance'], where: { id: bet.user_id } });
        const balance = Number(user.balance) + Number(multi[0].potential);
        await DB.w_users.update({ balance }, { where: { id: bet.user_id } });
        await DB.w_sports_bet.update({ profit: multi[0].potential }, { where: { betsId: bet.betsId } });
      }
    }
  }
}