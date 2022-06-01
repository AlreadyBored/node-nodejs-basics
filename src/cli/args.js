import {argv} from 'node:process'

export const parseArgs = () => {
    argv.forEach((prop,idx) => {
        if(/^--/.test(prop)) console.log(`${prop.slice(2)} is ${argv[idx+1]}`)
    })
};

parseArgs()