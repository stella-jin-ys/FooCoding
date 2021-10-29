'use strict';

function doubleOddNumbers(numbers) {
    return numbers.filter(odd=> odd % 2 !== 0)
    .map((num) => num*2)
  console.log(numbers);
}
const myNumbers = [1, 2, 3, 4];
console.log(doubleOddNumbers(myNumbers));

// Do not change or remove anything below this line
module.exports = {
  myNumbers,
  doubleOddNumbers,
};
