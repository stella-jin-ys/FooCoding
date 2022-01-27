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

// Connect to database

// 1. What is the capital of country X ? (Accept X from user)
/*let country = 'Sweden';
connection.execute(
    'select city.name from country inner join city on city.countryCode=country.code where country.name=? limit 1',
    [country],
    (err, results)=>{
        console.log(results);
    }
);*/

// 2. List all the languages spoken in the region Y (Accept Y from user)
/*let region = 'North America';
connection.execute(
    'select cl.language from country inner join countryLanguage cl on cl.countryCode =country.code where country.region=?',
    [region],
    (err, results)=>{
        console.log(results)
    }
); */

// 3. Find the number of cities in which language Z is spoken (Accept Z from user)
/*let cityNum = 'Gur';
connection.execute(
    'select count(name) from city inner join countryLanguage cl on city.countryCode = cl.countryCode where cl.language=?',
    [cityNum],
    (err, results)=>{
        console.log(results);
    }
); */

// 4. List all the continents with the number of languages spoken in each continent
connection.execute(
    'select continent, count(language) from country inner join countryLanguage cl on country.code=cl.countryCode group by continent ',
    (err,results)=>{
        console.log(results);
    }
)

const app = express();

app.listen('3000', ()=>{console.log('Server started')})