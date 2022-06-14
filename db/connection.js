//dependency
const mysql = require("mysql2");

require("dotenv").config();

const db = mysql.createConnection(
  {
    host: "127.0.0.1",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  console.log("Connected to the company database")
);

db.connect(function (error) {
  if (error) throw error;
  afterConnection();
}),

afterConnection = () => {
    console.log("***********************************")
    console.log("*                                 *")
    console.log("*        COMPANY DATABASE         *")
    console.log("*                                 *")
    console.log("***********************************")
    promptUser();
};
  (module.exports = db);
