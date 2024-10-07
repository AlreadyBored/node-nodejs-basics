import process from 'process';

const parseArgs = () => {
  const args = process.argv;
  for (let i = 2; i < args.length; i += 2) console.log(args[i].slice(2), ' is ', args[i + 1]);
};

parseArgs();
