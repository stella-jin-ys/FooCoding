-- 1.
SELECT name 
FROM new_world.country 
WHERE population > 8000000;


SELECT name
FROM new_world.country
WHERE name LIKE '%land%';

SELECT name FROM new_world.city
WHERE 500000 < population < 1000000;

SELECT name FROM new_world.country
WHERE continent = 'Europe';

SELECT name FROM new_world.country
ORDER BY surfaceArea;

SELECT city.name, country.population
FROM new_world.country
INNER JOIN new_world.city 
ON city.countryCode = country.code
WHERE city.name='Rotterdam';

SELECT country.name, country.surfaceArea
FROM new_world.country
ORDER BY surfaceArea DESC
LIMIT 10;

SELECT country.name, country.surfaceArea
FROM new_world.country
ORDER BY surfaceArea DESC
LIMIT 10;

SELECT city.name, city.population
FROM new_world.city
ORDER BY population DESC
LIMIT 10;

SELECT SUM(population)
FROM new_world.country;