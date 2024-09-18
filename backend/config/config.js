require('dotenv').config();

module.exports = {
    database: process.env.DATABASE,
    username: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    clientUrl: process.env.CLIENT_URL,
}