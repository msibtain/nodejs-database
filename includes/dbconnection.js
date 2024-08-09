const mysql = require('mysql2');

/* dotenv module to read .env file, where we will store the database credentials; */
const dotenv = require('dotenv');
dotenv.config();

console.log( process.env.HOST );

const db = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USERNAME,
    password:process.env.PASSWORD,
    database:process.env.DATABASE,
    port: process.env.PORT,
    multipleStatements:true
});
db.connect((err)=>{
    if(err){
        console.log('error in connection', err);
    }else{
        console.log('db connected');
    }
})

module.exports = db