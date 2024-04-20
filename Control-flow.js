// Part 1: Growing Pains

const PI = 3.1415;
const rad = 5;
const area = PI * rad * rad;
const minPlantArea = 0.8;
let plants = 20;
let startArea = minPlantArea * plants; // 16
const maxArea = area * 0.8;
const norArea = area * 0.5;
let week = 3;
// each week plants double
if(week > 1){
    week *= week;
}

if((week * startArea) > maxArea){
    console.log("plants should be Pruned.");
} 
else if((week * startArea) > norArea && (week * startArea) <= maxArea){
    console.log("plants should be Monitored.");
} else{
    console.log("plants should be Planted.");
}

/* Result with out plantes double 
    week one = planted
    week two = planted
    week three = monitored
    week four = pruned
*/

/* Result with plantes double 
    week one = planted
    week two = pruned
    week three = pruned
*/

// Part 2: Thinking Bigger

plants = 100;
week = 10;
startArea = maxArea * plants;
const newArea = startArea * week;
console.log(`The additional area required for 10 weeks is ${newArea} if the plantes weren't pruned.`);