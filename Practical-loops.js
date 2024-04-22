// Part 1: Fizz Buzz
/*
If a number is divisible by 3, log “Fizz.”
If a number is divisible by 5, log “Buzz.”
If a number is divisible by both 3 and 5, log “Fizz Buzz.”
If a number is not divisible by either 3 or 5, log the number.
*/
for (let i = 1; i <= 5; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log(i + " = Fizz Buzz.");
    } else if (i % 3 == 0) {
        console.log(i + " = Fuzz.")
    }
    else if (i % 5 == 0) {
        console.log(i + " = Buzz.");
    } else {
        console.log(i + " = " + i);
    }
}

// Part 2: Prime Time
let n = 2;
let prime = 0;
for (let i = n; i <= 20; i++) {
    for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
            prime++
        }
    }
    if (prime == 2) {
        console.log(i);
        break
    }
    //prime = 0;
}

// Part 3: Feeling Loopy
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let str ="ID,Name,Occupation,Age\\n42,Bruce,Knight,41\\n57,Bob,Fry Cook,19\\n63,Blaine,Quiz Master,58\\n98,Bill,Doctors Assistant,26";
let char = '';
let charLength = str.length;
let commaCount = 1;

for (char of str) {
    if (charLength == 0) {
        break;
    }

    if (commaCount == 1) {
        if (char == ",") {
            commaCount++;
            continue;
        }
        cell1 += char;
        charLength--;
    }
    if (commaCount == 2) {
        if (char == ",") {
            commaCount++;
            continue;
        }
        cell2 += char;
        charLength--;
    }

    if (commaCount == 3) {
        if (char == ",") {
            commaCount++;
            continue;
        }
        cell3 += char;
        charLength--;
    }
    if (commaCount == 4) {
        if (char == "\\") {
            charLength--;
            console.log(`${cell1}, ${cell2}, ${cell3}, ${cell4}`);
            continue;
        }
        if (char == "n") {
            charLength--;
            commaCount = 1;
            cell1 = "";
            cell2 = "";
            cell3 = "";
            cell4 = "";
            continue;
        }
        cell4 += char;
        charLength--;
    }
}

