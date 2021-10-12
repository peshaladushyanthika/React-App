//setting up database with postgresql
const Pool = require('pg').Pool;
const pool = new Pool({
    user : 'postgres',
    host : 'localhost',
    database : 'sampledb',
    password : '1234neto',
    port : 5432,
});
pool
.connect()
.then(()=>{
    console.log("Database is connected.. ");
})
.catch(err=>{
    console.log("unable to connect" , err);
});
module.exports = pool;
