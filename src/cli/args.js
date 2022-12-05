import { argv } from 'process';

const parseArgs = () => {
  const arr = [];
  for (let i = 2; i < argv.length; i += 2) {
    arr.push(argv[i] + ' is ' + argv[i + 1]);
  }
  console.log(arr.join(', '));
};

parseArgs();