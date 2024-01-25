import { argv } from 'process';

const parseArgs = () => {
    argv.forEach((val, i) => {
        if (i % 2 === 0) {
            const res = val.slice(2) + ' is ' + argv[i + 1] + '; ';
            console.log(res);
        }
      });
};

parseArgs();