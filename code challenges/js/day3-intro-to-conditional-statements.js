/* HackerRank Challenge: Day 3: Intro to Conditional Statements (30 Days of Code)
https://www.hackerrank.com/challenges/30-conditional-statements/problem

Task
Given an integer, n, perform the following conditional actions:

    If n is odd, print Weird
    If n is even and in the inclusive range of 2 to 5, print Not Weird
    If n is even and in the inclusive range of 6 to 20, print Weird
    If n is even and greater than 20, print Not Weird

Complete the stub code provided in your editor to print whether or not is weird.

Input Format

A single line containing a positive integer, n.

Constraints

1 <= n <= 100

Output Format

Print Weird if the number is weird; otherwise, print Not Weird.

*/


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

    

function main() {
    const N = parseInt(readLine(), 10);
    
    if (N <= 100 || N >= 1) {
        if (N % 2 === 0){
            if (N >= 2 && N <= 5){
                console.log("Not Weird");
            }
            else if (N >= 6 && N <= 20){
                console.log("Weird");
            }
            else if (N > 20){
                console.log("Not Weird");
            }
        }
        else {
            console.log("Weird");
        }
    }
}
