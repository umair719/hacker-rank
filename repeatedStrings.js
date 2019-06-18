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

// Complete the repeatedString function below.
function repeatedString(s, n) {
    // let l = n - s.length;
    // for(let i = 0; i < l; i ++ ) {
    //     s = s + s[i];
    //     console.log({i});
    // }
    // let count = (s.match(new RegExp('a', 'g')) || []).length;
    // console.log({s, n, l, count});
    // return count;
    let count = 0;
    const baseCount = (s.match(new RegExp('a', 'g')) || []).length;
    if (s.length === n) {
        count = baseCount;
    } else if(s.length < n) {

        count = Math.ceil(n / s.length * baseCount);
    } else {
        count = (s.substring(0, n).match(new RegExp('a', 'g')) || []).length;
    }
    console.log({baseCount, count});
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const s = readLine();
    const n = parseInt(readLine(), 10);
    let result = repeatedString(s, n);
    ws.write(result + "\n");
    ws.end();
}

// console.log(repeatedString('abcac', 10));
// console.log(repeatedString('ceebbcb', 817723));
console.log(repeatedString('bcbccacaacbbacabcabccacbccbababbbbabcccbbcbcaccababccbcbcaabbbaabbcaabbbbbbabcbcbbcaccbccaabacbbacbc', 649606239668));
process.kill(0);
