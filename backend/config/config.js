require('dotenv').config();

// module.exports = {
//     database: process.env.DB_NAME,
//     username: process.env.DB_USERNAME,
//     password: process.env.PASSWORD,
//     host: process.env.HOST,
//     dialect: process.env.DIALECT,
//     // port: process.env.PORT,
// }

module.exports = {
    database: process.env.DATABASE,
    username: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
    // port: process.env.PORT,
}