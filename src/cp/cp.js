import {spawn} from 'child_process'

const spawnChildProcess = async (args) => {
    // Write your code here
    const childProcess = spawn('node', ['script.js', ...args]);

    process.stdin.pipe(childProcess.stdin);

    childProcess.stdout.on('data', (stdout) => {
        // Send Data to master process stdout
        process.stdout.write(stdout);
    })
};

// Put your arguments in function call to test this functionality
await spawnChildProcess(['beka','132','312','asd']);
