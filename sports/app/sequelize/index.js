import dotenv from 'dotenv'
import path from 'path';
import { fileURLToPath } from 'url';
import { Sequelize, DataTypes } from '@sequelize/core';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '..', '..', '..', '.env') });

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false
    }
);

const sports = sequelize.define('w_sports', {
    _id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    id: {
        type: DataTypes.STRING,
        unique: true,
    },
    sport_id: {
        type: DataTypes.INTEGER,
    },
    sport_name: {
        type: DataTypes.STRING,
    },
    time: {
        type: DataTypes.STRING(100),
    },
    time_status: {
        type: DataTypes.INTEGER,
    },
    league_id: {
        type: DataTypes.STRING(100),
    },
    league: {
        type: DataTypes.JSON,
    },
    home: {
        type: DataTypes.JSON,
    },
    away: {
        type: DataTypes.JSON,
    },
    ss: {
        type: DataTypes.STRING(100),
    },
    points: {
        type: DataTypes.STRING(100),
    },
    playing_indicator: {
        type: DataTypes.STRING(100),
    },
    timer: {
        type: DataTypes.JSON,
    },
    scores: {
        type: DataTypes.JSON,
    },
    stats: {
        type: DataTypes.JSON,
    },
    odds: {
        type: DataTypes.JSON,
    },
    bet365_id: {
        type: DataTypes.STRING(100),
    }
});
sports.sync();

const league = sequelize.define('w_sports_league', {
    _id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    id: {
        type: DataTypes.STRING,
        // unique: true,
    },
    sport_id: {
        type: DataTypes.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
    },
    cc: {
        type: DataTypes.STRING,
    },
    has_leaguetable: {
        type: DataTypes.INTEGER,
    },
    has_toplist: {
        type: DataTypes.INTEGER,
    }
});
league.sync();

const country = sequelize.define('w_sports_country', {
    cc: {
        type: DataTypes.STRING
    },
    country: {
        type: DataTypes.STRING
    }
});
country.sync();

const users = sequelize.define('w_users', {
    email: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    parent_id: {
        type: DataTypes.INTEGER
    },
    inviter_id: {
        type: DataTypes.INTEGER
    },
    first_name: {
        type: DataTypes.STRING
    },
    last_name: {
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    phone_verified: {
        type: DataTypes.INTEGER
    },
    rating: {
        type: DataTypes.INTEGER
    },
    avatar: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.DECIMAL
    },
    role_id: {
        type: DataTypes.INTEGER
    },
    shop_id: {
        type: DataTypes.INTEGER
    },
    birthday: {
        type: DataTypes.DATE
    },
    currency: {
        type: DataTypes.STRING
    },
    balance: {
        type: DataTypes.DECIMAL
    },
    tournaments: {
        type: DataTypes.DECIMAL
    },
    happyhours: {
        type: DataTypes.DECIMAL
    },
    refunds: {
        type: DataTypes.DECIMAL
    },
    progress: {
        type: DataTypes.DECIMAL
    },
    daily_entries: {
        type: DataTypes.DECIMAL
    },
    invite: {
        type: DataTypes.DECIMAL
    },
    welcomebonus: {
        type: DataTypes.DECIMAL
    },
    smsbonus: {
        type: DataTypes.DECIMAL
    },
    wheelfortune: {
        type: DataTypes.DECIMAL
    },
    count_balance: {
        type: DataTypes.DECIMAL
    },
    count_tournaments: {
        type: DataTypes.DECIMAL
    },
    count_happyhours: {
        type: DataTypes.DECIMAL
    },
    count_refunds: {
        type: DataTypes.DECIMAL
    },
    count_progress: {
        type: DataTypes.DECIMAL
    },
    count_daily_entries: {
        type: DataTypes.DECIMAL
    },
    count_invite: {
        type: DataTypes.DECIMAL
    },
    count_welcomebonus: {
        type: DataTypes.DECIMAL
    },
    count_smsbonus: {
        type: DataTypes.DECIMAL
    },
    count_wheelfortune: {
        type: DataTypes.DECIMAL
    },
    total_in: {
        type: DataTypes.FLOAT
    },
    total_out: {
        type: DataTypes.FLOAT
    },
    last_login: {
        type: DataTypes.DATE
    },
    confirmation_token: {
        type: DataTypes.STRING
    },
    sms_token: {
        type: DataTypes.STRING
    },
    sms_token_date: {
        type: DataTypes.DATE
    },
    status: {
        type: DataTypes.STRING
    },
    is_blocked: {
        type: DataTypes.INTEGER
    },
    is_demo_agent: {
        type: DataTypes.INTEGER
    },
    agreed: {
        type: DataTypes.INTEGER
    },
    free_demo: {
        type: DataTypes.INTEGER
    },
    remember_token: {
        type: DataTypes.STRING
    },
    api_token: {
        type: DataTypes.TEXT
    },
    auth_token: {
        type: DataTypes.STRING
    },
    google2fa_enable: {
        type: DataTypes.INTEGER
    },
    google2fa_secret: {
        type: DataTypes.STRING
    },
    language: {
        type: DataTypes.STRING
    },
    session: {
        type: DataTypes.TEXT
    },
    last_online: {
        type: DataTypes.DATE
    },
    last_bid: {
        type: DataTypes.DATE
    },
    last_progress: {
        type: DataTypes.DATE
    },
    last_daily_entry: {
        type: DataTypes.DATE
    },
    last_wheelfortune: {
        type: DataTypes.DATE
    },
    created_at: {
        type: DataTypes.DATE
    },
    updated_at: {
        type: DataTypes.DATE
    }
});
// users.sync();

const bet = sequelize.define('w_sports_bet', {
    betsId: {
        type: DataTypes.STRING,
    },
    SportId: {
        type: DataTypes.INTEGER,
    },
    SportName: {
        type: DataTypes.STRING,
    },
    eventId: {
        type: DataTypes.STRING,
    },
    user_id: {
        type: DataTypes.STRING,
    },
    odds: {
        type: DataTypes.FLOAT,
    },
    stake: {
        type: DataTypes.FLOAT,
    },
    profit: {
        type: DataTypes.FLOAT,
    },
    potential: {
        type: DataTypes.FLOAT,
    },
    marketId: {
        type: DataTypes.STRING,
    },
    handicap: {
        type: DataTypes.STRING,
    },
    oddType: {
        type: DataTypes.STRING,
    },
    betType: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.STRING,
    },
    home: {
        type: DataTypes.STRING,
    },
    away: {
        type: DataTypes.STRING,
    },
    league: {
        type: DataTypes.STRING,
    },
    updated_at: {
        type: DataTypes.STRING,
    },
    created_at: {
        type: DataTypes.STRING,
    }
});
bet.sync();

export default sequelize;