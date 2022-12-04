import { argv } from 'node:process';

const parseArgs = () => {
  const args = argv.slice(2);

  const stringResult = args.reduce((result, arg) => {
    if (arg.startsWith('--')) {
      return (result += arg + ' is ');
    } else {
      return (result += arg + ', \n');
    }
  }, '');

  console.log(stringResult);
};

parseArgs();
