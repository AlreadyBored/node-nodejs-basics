import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
  // Write your code here
  const childProcess = spawn('node', ['./src/cp/files/script.js', args], { stdio: ['pipe', 'pipe', process.stderr] });
  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.on('data', (data) => {
    process.stdout.write(data);
  });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2']);