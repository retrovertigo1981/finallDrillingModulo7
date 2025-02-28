require('dotenv').config();

module.exports = {
  development: {
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE + '_development',
    host: process.env.PG_HOST,
    dialect: 'postgres',
  },
  test: {
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE + '_test',
    host: process.env.PG_HOST,
    dialect: 'postgres',
  },
  production: {
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE + '_production',
    host: process.env.PG_HOST,
    dialect: 'postgres',
  },
};
