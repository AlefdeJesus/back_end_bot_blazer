const postgres = require('postgres');
const pg = require('pg');
require('dotenv').config();

  var username = process.env.USE;
  var password = process.env.PASSWORD;
  var database = process.env.DATABASE;
  var host = process.env.HOST;
  var dialect = process.env.DIALECT;

  const config = {
    development: {
      username: username,
      password: password,
      database: database,
      host: host,
      dialect: 'postgres',
      port: 5432,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      },
      sslmode: "require"
    },
    test: {
      username: username,
      password: password,
      database: database,
      host: host,
      dialect: 'postgres',
      port: 5432,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      },
      sslmode: "require"
    },
    production: {
      username: username,
      password: password,
      database: database,
      host: host,
      dialect: 'postgres',
      port: 5432,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      },
      sslmode: "require"
    }
  };
  module.exports = config;