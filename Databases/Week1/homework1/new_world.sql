-- 1 What are the names of countries with population greater than 8 million
SELECT name 
FROM new_world.country 
WHERE population > 8000000;

-- 2 What are the names of countries that have “land” in their names ?
SELECT name
FROM new_world.country
WHERE name LIKE '%land%';

-- 3 What are the names of the cities with population in between 500,000 and 1 million ?
SELECT name FROM new_world.city
WHERE 500000 < population < 1000000;

-- 4 What's the name of all the countries on the continent ‘Europe’ ?
SELECT name FROM new_world.country
WHERE continent = 'Europe';

-- 5 List all the countries in the descending order of their surface areas.
SELECT name FROM new_world.country
ORDER BY surfaceArea;

-- 6 What are the names of all the cities in the Netherlands?
SELECT city.id, city.name, country.code
FROM new_world.city
INNER JOIN new_world.country
ON country.code = city.countryCode
WHERE country.name = 'Netherlands';

-- 7 What is the population of Rotterdam ?
SELECT city.name, country.population
FROM new_world.country
INNER JOIN new_world.city 
ON city.countryCode = country.code
WHERE city.name='Rotterdam';

-- 8 What's the top 10 countries by Surface Area ?
SELECT country.name, country.surfaceArea
FROM new_world.country
ORDER BY surfaceArea DESC
LIMIT 10;

-- 9 What's the top 10 most populated cities?
SELECT city.name, city.population
FROM new_world.city
ORDER BY population DESC
LIMIT 10;

-- 10 What is the population of the world ?
SELECT SUM(population)
FROM new_world.country;
