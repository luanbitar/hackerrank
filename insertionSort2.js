'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputBuffer = '';

process.stdin.on('data', inputStdin => {
    inputBuffer += inputStdin;
});

process.stdin.on('end', _ => {
    const [arrLength, arrStringified] = inputBuffer.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    const arr = arrStringified.split(' ').map(arrTemp => parseInt(arrTemp, 10));

    main(parseInt(arrLength), arr);
});

function main(arrLength, arr) {
    for (var index = 2; index <= arrLength; index = index + 1) {
        const firstSectionOrdered = arr.slice(0, index).sort((a, b) => a - b)
        const restOfArrayUnordered = arr.slice(index, arr.length)
        const outputArray = [...firstSectionOrdered, ...restOfArrayUnordered]
        console.log(outputArray.join(" "))
    }
}
