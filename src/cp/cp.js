import {spawn} from "child_process"
const spawnChildProcess = async (args) => {
    // Write your code here
    const childProcess = spawn('node',['src/cp/files/script.js', ...args]);
    childProcess.stdin.write('Test Data')
    childProcess.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
    });

    childProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });
};

await spawnChildProcess(['first', 'second']);