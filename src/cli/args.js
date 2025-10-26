import { argv } from 'node:process';

export const parseArgs = () => {
  const parts = argv.slice(2);
  const out = [];

  for (let i = 0; i < parts.length; i += 2) {
    out.push(`${parts[i].replace(/^--/, '')} is ${parts[i + 1]}`);
  }

  console.log(out.join(', '));
};

parseArgs();
