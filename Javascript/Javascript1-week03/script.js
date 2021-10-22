/*1. Strings!
1.1 Add the string to your file and log it.
1.2 Log the length of myString.
1.3 The commas make that the sentence is quite hard to read. Find a way to remove the commas from the string and replace them with spaces.
1.4 Log myString to see if you succeeded.
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString)
console.log(myString.length)
myString=myString.replace(/,/g,' ')
console.log(myString)*/

/*2. Arrays!
2.1 Add a statement that adds Mauro's favorite animal 'turtle' to the existing array.
2.2 Log your new array!
2.3 Now add Jim's favorite animal to the array, it's 'meerkat', but make sure it will be placed after 'blowfish' and before 'capricorn'.
2.4 Write a console.log statement that explains in words you think the new value of the array is.
2.5 Log your new array!
2.6 Log the length of the array, add a message: 'The array has a length of: ' (here you should show the length of the array).
2.7 Jason does not like 'giraffe', delete this animal from the array.
2.8 Again log your new array.
2.9 Now if unlike Jim, you don't like 'meerkat' and you want to delete it from the array, but you don't know the position or the index of the item in the array, how can you find it?
2.10 Log the index of 'meerkat'. Add a message so it says: 'The item you are looking for is at index: ' (here you should show the index of the item). 
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push(
  "adds Mauro's favourite animal 'turtle' to the existing array"
);
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, "meerkat");
console.log(
  "New value of the array is 'blowfish', 'meerkat', 'capricorn', 'giraffe', 'adds Mauro's favourate animal 'turtle''"
);
console.log(favoriteAnimals);
console.log(`The array has a length of' ${favoriteAnimals.length}`)
favoriteAnimals.splice(3,1)
console.log(favoriteAnimals)
favoriteAnimals = [
  "blowfish",
  "meerkat",
  "capricorn",
  "giraffe",
  "adds Mauro's favourate animal 'turtle"
];
favoriteAnimals.map((favoriteAnimal, index) => {
  if (favoriteAnimal === "meerkat") {
    console.log(`The item you are looking for is at index ${index}`);
  }
});*/

////////////////// More Javascript //////////////////////////////

// 1. Create a function that takes 3 arguments and returns the sum of the these arguments.
/*function sumOfThree(one, two, three) {
  const sum = one + two + three;
  return sum;}
sumOfThree(2, 3, 5);*/

// 2. Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
/*function colorCar(color){
  console.log(`a ${color} car`)
}
colorCar('green')*/

// 3. Create an object and a function that takes the object as a parameter and prints out all of its properties and values.
/*const myObject = {
  name: "Stella",
  gender: "female",
  age: 100
};
function newObject(object1) {
  for (i in object1) {
    console.log(`${i}: ${object1[i]}`);
  }
}
newObject(myObject); */

// 4. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)
/*function vehicleType(color,code){
  if( code === 1) {console.log(`a ${color} car`)}
  if( code === 2) {console.log(`a ${color} motorbike`)}
}
vehicleType('blue',2)*/

/*5. Can you write the following without the if statement, but with just as a single line with console.log(...);?
if (3 === 3) {
  console.log("yes");
} else {
  console.log("no");
}
3 === 3 ? console.log("yes") : console.log("no");*/

// 6. Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'
/*function vehicle(color, code, age) {
  if (code === 1 && age> 0) {
    console.log(`a ${color} used car`);
  }
  if (code === 2 && age > 0) {
    console.log(`a ${color} used motorbike`);
  }
}
vehicle("blue", 1, 5);
vehicle("red", 2, 5);*/

/* 7. Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
 8. How do you get the third element from that list?
 9. Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".*/
/*  const vehicles = ["motorbike", "caravan", "bike", "jeep"];
//console.log(vehicles[2]);
function vehicle(color, code, age) {
  if (code > vehicles.length - 1) {
    return console.log("We do not have this vehicle");
  }
  if (code <= vehicles.length - 1 && age < 2) {
    console.log(`a ${color} new ${vehicles[code]}`);
  } else {
    console.log(`a ${color} used ${vehicles[code]}`);
  }
}
vehicle("green", 2, 1);
vehicle("pink", 1, 3);
vehicle("red", 5, 3);*/

// 10. Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.) Hint, the output should be correct English with all the punctuation in place (that's the challenge). So plurals for the vehicle types, commas followed by a single space, the word and to replace the final comma and closed off by a period.
/* const vehicles = ["motorbike", "caravan", "bike", "jeep"];
function vehicle(arr) {
  let str = "";
  for (i = 0; i < arr.length; i++) {
    i === arr.length - 1 ? (str += `and ${arr[i]}s.`) : (str += `${arr[i]}s, `);
  }
  console.log(`Amazing Joe's Garage, we service ${str} `);
}
vehicle(vehicles);  */


// 11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
/* vehicles.push("car");
vehicle(vehicles);  */


/* 12. Create an empty object.
13. Create an object that contains the teachers that you have had so far for the different modules.
14. Add a property to the object you just created that contains the languages that they have taught you. */
/*const myObject = {}
const teachers = {
  'html': 'Ildana',
  'css':'Alex and Claudiu',
  'javascript':'Sahin',
  'language':'javascript'
}*/

// 15. Write some code to test two arrays for equality using == and ===. Test the following:
/*let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;
(x == y) ? console.log('equal') : console.log('not equal'); //not equal
(x === y) ? console.log('equal') : console.log('not equal'); //not equal
(z == y) ? console.log('equal') : console.log('not equal'); //equal
(z ==x) ? console.log('equal') : console.log('not equal'); //not equal */

/* 16. Take a look at the following code:
Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).
Does the order that you assign (o3 = o2 or o2 = o3) matter? */
/*let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;
o2['say']='hi';
(o3 === o2) ? console.log('true') : console.log('false')
o1['do']='smile';
console.log(o1);
console.log(o3);
(o3 === o1) ? console.log('true') : console.log('false')
o2 = o3;
(o2 === o3) ? console.log('true') : console.log('false') */

// 17. What does the following code return? (And why?)
//‘Coerce' means to try to change - so coercing var x = '6' to number means trying to change the type to number temporarily.
let bar = 42;
console.log(typeof typeof bar);
