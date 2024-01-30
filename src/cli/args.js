import { argv } from 'process';


const parseArgs = () => {
    console.log(argv.slice(2).map((el, i, arr) => el.includes('--') ? `${el.slice(2)} is ${arr[i + 1]}` : ', ').join('').slice(0, -2))
};

parseArgs();