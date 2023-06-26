import {exec} from 'child_process';

const spawnChildProcess = async (args) => {
  const targetScriptFile = './src/cp/files/script.js';

  const cmd = `node ${targetScriptFile} ${args.join(' ')}`;
  const {stdout, stdin} = exec(cmd, args);

  stdout.pipe(process.stdout);
  process.stdin.pipe(stdin);
};

// Put your arguments in function call to test this functionality
spawnChildProcess([1, 2, '3']);
