const mysql=require('mysql');
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'temple',
    port:3306
});

//check database connection

db.connect((err)=>{
    if (err) {
    console.log('database not connected...');}
    else{
console.log("database is connected")
    }
})
module.exports=db;