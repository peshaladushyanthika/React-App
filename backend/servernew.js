//setting up express.js server
const express = require('express');
const app = express();
const port = 3000;
const pool = require('./database_connection');

//to use json body in requests
app.use(express.json());
//post response for create endpoint
app.post('/create', async (req, res) => {
    const userDetails = req.body;
    //query attributes and access data
pool.query(
    'INSERT INTO sampledb(Name,Description,Adaptability,Affection_Level,Child_Friendly,Stranger_Friendly,Energy_Level,Weight)'
    ,VALUES(
        userDetails.name,
        userDetails.description,
        userDetails.adaptability,
        userDetails.affectionLevel,
        userDetails.childFriendly, 
        userDetails.strangerFriendly, 
        userDetails.energyLevel,
        userDetails.weight
        ),
   
    (err, result) => {
        if (err) {
            res.send("There is an error..");
            console.log('error');
        }
        else {
            res.send(`${result}`);
        }
 });
});
//get request for breedlist endpoint
app.get('/breedsList', async (req, res) => {
    pool.query('SELECT * FROM breeds_data ORDER BY name', 
    
    (er, result) => {
        if (er) {
            res.send(er);
        }
        else {
            res.send(result.rows);
            console.log('get data from database..')
        }
    });
});
//get data from external url
//API key:3fb10d32-16b7-4f95-9fbe-05d5014538a4
const fetch = require('node-fetch');
app.get('/v1/breeds',(req,res)=>{
    var url = 'https://api.thecatapi.com/v1/breeds';

    fetch(url)
    .then(res => res.json())
    .then(data => {
        res.send({data});
    })
    .catch(err => {
        res.send(err);
    });
});
//to listen on given port
app.listen(port, () => {
    console.log("this app is listning on port 3000");
}
);




