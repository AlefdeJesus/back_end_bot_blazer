const postgres = require('postgres');

const config = {
  development: {
    username: "admin",
    password: "admin",
    database: "meubanco",
    host: "localhost",
    dialect: 'postgres',
    port: 5432,
   /* dialectOptions: { username: "admin",
      password: "admin",
      database: "meubanco",
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    sslmode: "require"*/

  },
  test: {
    
  },
  production: {
    
  }
};
module.exports = config;