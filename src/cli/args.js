import { argv } from 'node:process';

export const parseArgs = () => {
    let str = '';
    argv.forEach((el,ind) => {
        if (el.startsWith('--')) {
            str += el.slice(2,el.length) + ' is ' + argv[ind+1] + ', ';
        }
    })
    if (str.length) {
        str = str.slice(0,str.length - 2);
    }
    console.log(str);
};

parseArgs();