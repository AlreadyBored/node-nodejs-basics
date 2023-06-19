import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
    // Write your code here
    console.log(args)
    const scriptProcess = spawn('node', ['./files/script.js', ...args]);

    process.stdin.pipe(scriptProcess.stdin);
    scriptProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ["someArgument1", "someArgument2"]);