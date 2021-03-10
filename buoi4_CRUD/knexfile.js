require('dotenv').config();

module.exports = {
  development: {
    client: process.env.DB_TYPE,
    connection: {
      host : process.env.DB_HOST,
      port: process.env.DB_PORT,
      user : process.env.DB_USER,
      password : process.env.DB_PASS,
      database : process.env.DB_NAME,
      charset: 'utf8'
    },
    migrations: {
      directory: __dirname + '/src/config/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/src/config/knex/seeds'
    }
  },
  staging: {
    client: process.env.DB_TYPE,
    connection: {
      host : process.env.DB_HOST,
      port: process.env.DB_PORT,
      user : process.env.DB_USER,
      password : process.env.DB_PASS,
      database : process.env.DB_NAME + '_staging',
      charset: 'utf8'
    },
    migrations: {
      directory: __dirname + '/src/config/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/src/config/knex/seeds'
    }
  },
};
