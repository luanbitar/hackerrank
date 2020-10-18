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
    const sortedArr = arr.slice(0, -1)
    const unorderedElement = arr[arrLength-1]

    for(var index = arrLength - 2; index >= -1; index = index - 1) {
        const itemToCompare = sortedArr[index]
        let outputArr = [...sortedArr]
        const isCorrectPositionOfIndex = itemToCompare > unorderedElement
        if (isCorrectPositionOfIndex) {
            outputArr.splice(index, 0, itemToCompare)
            console.log(outputArr.join(" "))
        } else {
            outputArr.splice(index + 1, 0, unorderedElement)
            console.log(outputArr.join(" "))
            return

        }
    }
}
