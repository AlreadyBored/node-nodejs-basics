import { argv } from 'process';

const parseArgs = () => {
    argv.forEach((name, i) => {
        if (i % 2 === 0) {
            console.log(`${name.slice(2)} is ${argv[i + 1]},`);
        }
      });
};

parseArgs();