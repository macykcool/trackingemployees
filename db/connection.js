//dependency
const mysql = require('mysql2')

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'lol',
    database: ''
});
//queries will be in a class and i export them for index depending on what user wants to do

//routes refernce connection

//index fetches routes , passes the data to be used in the queries 

// server that requires msql2 and connects to database

module.exports = db;