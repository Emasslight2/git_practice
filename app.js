const fs = require("fs");

let mode = 3;

const patternsFile = fs.readFileSync('patterns.txt', 'utf8'); //blocks code
let patterns = patternsFile.split('\r\n');

const inputFile = fs.readFileSync('input.txt', 'utf8');
let words = inputFile.split('\r\n');

console.log("Input: " + words);
console.log("Patterns: " + patterns);
console.log("\n");



let differentiator = (longSTR, shortSTR) => {
    let errors = 0;
    for (let i = 0; i < longSTR.length; i++) {
        if (longSTR[i] === shortSTR[i]) {
            continue;
        } else if (errors < 2) {
            errors++;
            continue;
        } else {
            break;
        }
    }
    return errors;
};
let compare = (arr1, arr2) => {
    let arr = [];
    arr1.forEach((el1) => arr2.forEach((el2) => {
        if (el1 === el2) {
            arr.push(el1);
        }
    }));
    return arr;
}

switch (mode) {
    case 1: {
        let result = compare(words, patterns);
        console.log("Result: " + result);
        break;
    }
    case 2: {
        let result = [];
        for (let i in words) {
            if (words[i] === patterns[i]) {
                result.push(words[i]);
            }
        }
        console.log("Result: " + result);
        break;
    }
    case 3: {
        let errors = 0;
        let result = [];
        words.forEach(word => {
            for (let i in patterns) {
                if (word.length >= patterns[i].length) errors = differentiator(word, patterns[i]);
                else errors = differentiator(patterns[i], word);
                if (errors <= 1) {
                    result.push(word);
                    return;
                }
            }
        })
        console.log("Result: " + result);
        break;

    }
    default:
        console.log("No such mode");
};