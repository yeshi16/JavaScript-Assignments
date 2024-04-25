// Part 1: Thinking Functionally

// Take an array of numbers and return the sum.

const arr = [2, 6, 8, 7, 9, 16];

function sum(arr) {
  for (let i = 0; i < arr.length; i++) {
    let total = 0;
    total += arr[i];
  }
  return total;
}
//console.log(sum(arr));

// Take an array of numbers and return the average.
function avg(arr) {
  let total = sum(arr);
  return total / arr.length;
}
//console.log(avg(arr));

// Take an array of strings and return the longest string.
const arrStr = ["hi", "Lorem", "ipsm", "sit", "consec", "adipisicing"];

function longestStr(arrStr) {
  let counter = 0;
  let eachStrCount = 0;
  let val = 0;
  for (let i = 0; i < arrStr.length; i++) {
    for (let str of arrStr[i]) {
      //console.log(str);
      counter += 1;
    }
    val = eachStrCount < counter ? eachStrCount = counter : eachStrCount;
    counter = 0;
  }

  return val;
}

// console.log(longestStr(arrStr));

// Take an array of strings, and a number and return an array of the strings that are longer than the given number.
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
let num = 3;

function strLongerThan(arrStr, num) {
  let counter = 0;
  for (let i = 0; i < arrStr.length; i++) {
    for (let str of arrStr[i]) {
      counter += 1;
    }
    if (counter > num) {
      console.log(arrStr[i]);
    }
    counter = 0;
  }

}
//strLongerThan(arrStr, num);

//Take a number, n, and print every number between 1 and n without using loops. Use recursion.

function printNum(n) {

  if (n == 1) {
    console.log(n);
    return;
  }
  printNum(n - 1);
  console.log(n);
}
//printNum(3);


// Part 2: Thinking Methodically

let data = [
  { id: "42", name: "Bruce", occupation: "Knight", age: 41 },
  { id: "48", name: "Barry", occupation: "Runner", age: 25 },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: 19 },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: 58 },
  { id: "7", name: "Bilbo", occupation: "None", age: 111 }
]

// Sort the array by age.
let sortedData = data.sort((ageOne, ageTwo) => ageOne.age - ageTwo.age)
// console.log(sortedData);

// Filter the array to remove entries with an age greater than 50.
let filteredData = data.filter((eachData) => eachData.age < "50");
//console.log(filteredData)

// Map the array to change the “occupation” key to “job” and increment every age by 1.
const changedData = data.map(({ id, name, occupation, age }) => ({
  id: id,
  name: name,
  job: occupation,
  age: age
}));
// console.log(changedData)

// Use the reduce method to calculate the sum of the ages.
// Then use the result to calculate the average age.

let sumData = data.reduce((sum, eachData) => {
  return sum + eachData.age
}, 0)

// console.log(sumData)
let average = sumData / data.length;
//console.log(average);

//Part 3: Thinking Critically
// Take an object and increment its age field.
let obj = { id: "42", name: "Bruce", occupation: "Knight", age: 41 }

function incrementAge(obj) {
  obj.age++;
}
incrementAge(obj)
//console.log(obj.age)

// Take an object, make a copy, and increment the age field of the copy. Return the copy.
let obj2 = { id: "48", name: "Barry", occupation: "Runner"}
function objCopy(obj) {

  let newObj = { ...obj }
  if (!newObj.hasOwnProperty('age')) {
    newObj.age = 0;
  }
  newObj.updated_at = new Date();
  return newObj;
}

let copiedObj = objCopy(obj);
console.log(copiedObj)
let copiedObjNoAge = objCopy(obj2);
console.log(copiedObjNoAge)