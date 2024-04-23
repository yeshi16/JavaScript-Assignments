// Part 1: Thinking Functionally

// Take an array of numbers and return the sum.

const arr = [ 2,6,8,7,9,16];

function sum(arr){
  for(let i = 0; i < arr.length; i ++){
    let total = 0;
    total += arr[i];   
  }
  return total;
}
//console.log(sum(arr));

// Take an array of numbers and return the average.
function avg(arr){
  let total = sum(arr);
  return total / arr.length;
}
//console.log(avg(arr));

// Take an array of strings and return the longest string.
const arrStr = ["hi", "Lorem", "ipsm", "sit", "consec", "adipisicing"];

function longestStr(arrStr){
  let counter = 0;
  let eachStrCount = 0;
  let val = 0;
  for(let i = 0; i < arrStr.length; i++){
    for(let str of arrStr[i]){
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

function strLongerThan(arrStr, num){
  let counter = 0;
  for(let i = 0; i < arrStr.length; i++){
    for(let str of arrStr[i]){
      counter += 1;
    } 
    if(counter > num){
      console.log(arrStr[i]);
    }
    counter = 0;
  }
  
}
//strLongerThan(arrStr, num);

//Take a number, n, and print every number between 1 and n without using loops. Use recursion.

function printNum(n){
  
  if (n == 1 ){
    console.log(n);
    return;
  }
  printNum(n - 1);
  console.log(n);
}

//printNum(3);