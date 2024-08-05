require('dotenv').config()

const {
  POSTGRE_USERNAME,
  POSTGRE_PASSWORD,
  POSTGRE_DATABASE,
  POSTGRE_HOST,
  POSTGRE_USERNAME_TEST,
  POSTGRE_PASSWORD_TEST,
  POSTGRE_DATABASE_TEST,
  POSTGRE_HOST_TEST,
} = process.env



module.exports = {
  development: {
    username: POSTGRE_USERNAME,
    password: POSTGRE_PASSWORD,
    database: POSTGRE_DATABASE,
    host: POSTGRE_HOST,
    dialect: 'postgres',
    logging: false,
  },
  test: {
    username: POSTGRE_USERNAME_TEST,
    password: POSTGRE_PASSWORD_TEST,
    database: POSTGRE_DATABASE_TEST,
    host: POSTGRE_HOST_TEST,
    dialect: 'postgres',
    logging: false,
  }
}
