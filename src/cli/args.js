import process from 'process';

export const parseArgs = () => {
    let res = process.argv.slice(2).reduce((acc, elem, ind, arr) => {
        if (ind % 2 === 0) {
            acc =  acc + `${elem} is ${arr[ind + 1]} `
        }
        return acc
    }, '')
    console.log(res)
};
parseArgs()