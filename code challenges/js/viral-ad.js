/*
https://www.hackerrank.com/challenges/strange-advertising/problem

HackerLand Enterprise is adopting a new viral advertising strategy. When they launch a new product, they advertise it to exactly people on social media.

On the first day, half of those people (i.e., ) like the advertisement and each shares it with of their friends. At the beginning of the second day, people receive the advertisement.

Each day, floor(recipients/2) of the recipients like the advertisement and will share it with friends on the following day. Assuming nobody receives the advertisement twice, determine how many people have liked the ad by the end of a given day, beginning with launch day as day .

For example, assume you want to know how many have liked the ad by the end of the day.

Day Shared Liked Cumulative
1      5     2       2
2      6     3       5
3      9     4       9
4     12     6      15
5     18     9      24

The cumulative number of likes is 24.

Input Format

A single integer, n, denoting a number of days.

Constraints

0 <= n <= 50

Output Format

Print the number of people who liked the advertisement during the first days.

Sample Input

3

Sample Output

9

Explanation

This example is depicted in the following diagram:

strange ad.png

people liked the advertisement on the first day, people liked the advertisement on the second day and people liked the advertisement on the third day, so the answer is .
*/

'use strict';

const fs = require('fs');

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

// Complete the viralAdvertising function below.
function viralAdvertising(n) {
    var day = 1;
    var shares = 5;
    var likes = 0;
    var total_likes = 0;

    // likes = Math.floor(shares/2)
    // as day++, shares = (likes*3)
    // where day = 1, shares = 5, likes = 2, total_likes = 2
    if (n > 0 && n <= 50) {
        for (;day <= n; day++) {
            likes = Math.floor(shares/2);
            total_likes += likes;
            shares = likes * 3;
        }

        return total_likes;
    } else {
        console.log("Invalid entry for number of days.");
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let result = viralAdvertising(n);

    ws.write(result + "\n");

    ws.end();
}
