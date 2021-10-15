//setting up express server
const express = require('express');
const app = express();
const port = 3000;
const pool = require('./database_connection');
const cors = require('cors');
const { request } = require('express');
app.use(cors);

///tell app to use json body in requests
app.use(express.json());

//save data in database
app.post('/create', async (req, res) => {

try{
    const userDetails = req.body;
    console.log(userDetails);
const savebreed = await pool.query(
    'INSERT INTO breeds_data(name,description,adaptability,affection_level,child_friendly,stranger_friendly,energy_level,weight)',
    VALUES(
        userDetails.name,
        userDetails.description,
        userDetails.adaptability,
        userDetails.affectionLevel,
        userDetails.childFriendly,
        userDetails.strangerFriendly,
        userDetails.energyLevel,
        userDetails.weight
    ),
    res.json(savebreed.rows[0]));
    console.log({savebreed});

    }
    catch(error){
console.log("There is an error",error);
    }
   
});
//get all data from database
app.get('/breedsList', async (req, res) => {
  try{
    const allbreed = pool.query('SELECT * FROM breeds_data ORDER BY name');
    res.json(allbreed.rows);
    console.log(allbreed);
  }
  catch(error){

    console.log("There is an error",error);
} 
    
});
//get data from external endpoint
//API key:3fb10d32-16b7-4f95-9fbe-05d5014538a4

const external = {
    method : 'GET',
    url : 'https://api.thecatapi.com/v1/breeds',
    headers : {'x-api-key' : '3fb10d32-16b7-4f95-9fbe-05d5014538a4'}
};

request(external,async(error,_response,body) => {
    try{
        console.log(body)
        const data = json.parse(body);
 pool.query(
            'INSERT INTO breeds_data(name,description,adaptability,affection_level,child_friendly,stranger_friendly,energy_level,weight)',
    VALUES(
            data.name,
            data.description,
            data.adaptability,
            data.affection_level,
            data.child_friendly,
            data.stranger_friendly,
            data.energy_level,
            data.weight
    ),)}
    catch{
        console.log(error);
    }
})
//to listen on given port
app.listen(port, () => {
    console.log("this app is listning on port 3000");
}
);








