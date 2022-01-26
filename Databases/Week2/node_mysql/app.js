// Get the client
const express = require('express');
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "chiwufan",
    database: "new_world"
});

// Connect 
let country = 'Sweden'
connection.execute(
    'select city.name from country inner join city on city.countryCode=country.code where country.name=? limit 1',
    [country],
    (err, results)=>{
        console.log(results);
    }
)

const app = express();

app.listen('3000', ()=>{console.log('Server started')})