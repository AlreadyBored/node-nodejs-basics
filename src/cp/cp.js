import { spawn } from 'child_process';
const spawnChildProcess = async (args) => {
    // Write your code here
    const data = spawn('node', ['./src/cp/files/script.js', ...args]);

    data.stdout.on('data', (d) => process.stdout.write(d))
    data.stderr.on('data', (d) => process.stdout.write(d))
    data.on('close', (code) => process.stdout.write(code))
};

// Put your arguments in function call to test this functionality
spawnChildProcess(  ['someArgument1', 'someArgument2', '...'] );
