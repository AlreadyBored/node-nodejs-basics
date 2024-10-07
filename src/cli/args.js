import { argv } from 'node:process';

const parseArgs = () => {
  const args = argv.slice(2);

  let result = [];
  args.forEach((arg, index) => {
    let next = index + 1;
    if (arg.startsWith('--') && args[next]) {
        result.push(`${arg.slice(2)} is ${args[next]}`)
    }
  });
  const joined = result.join(', ');
  console.log(joined);
};

parseArgs();
