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

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    //console.log({c});
    let jumps = 0;
    let djump = false;
    c = c.split(' ');
    for (let i = 0; i < c.length; i++) {
        if (c[i] === '0') {
            jumps++;
        }
        console.log({i, c: c[i], jumps});
        if (c[i] === '0' && c[i + 1] === '0' && c[i + 2] === '0') {
            i++;
        }
    }
    return jumps - 1;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);

    ws.write(result + "\n");

    ws.end();
}

console.log(jumpingOnClouds('0 0 1 0 0 1 0'));
console.log(jumpingOnClouds('0 1 0 0 0 1 0'));
console.log(jumpingOnClouds('0 0 1 0 0 0 0 1 0 0'));
console.log(jumpingOnClouds('0 1 0 1 0 1 0 0 0 0 0 0 0 0 1 0 1 0 0 0 0 1 0 1 0 0 1 0 0 0 1 0 1 0 0 0 1 0 1 0 1 0 1 0 0 0 1 0 0 0 0 0 1 0 1 0 1 0 0 1 0 1 0 1 0 0 1 0 0 0 0 1 0 0 1 0 0 0 1 0 0 1 0 1 0'));
process.kill(0);
