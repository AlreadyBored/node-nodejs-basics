import { argv } from 'node:process';

const parseArgs = () => {
    const arrChunkSize = 2;
    const chunkSize = 2;
    const slicedArr = argv.slice(arrChunkSize);
    const resultArr = [];

    for (let i = 0; i < slicedArr.length; i += chunkSize) {
        resultArr.push([slicedArr[i].slice(2), slicedArr[i + 1]])
    }

    const result = resultArr.map(([key, value]) => `${key} is ${value}`).join(', ');
    console.log(result);
};

parseArgs();