import {spawn} from 'child_process'

const spawnChildProcess = async (args) => {

    return new Promise((resolve, reject) => {
        const child = spawn('node',
            ['src/cp/files/script.js', ...args]);
        process.stdin.pipe(child.stdin);
        child.stdout.pipe(process.stdout);

        child.on('exit', (code, signal) => {
            console.log(`Child process exited with code ${code} and signal ${signal}`);
            if (code === 0) {
                resolve();
            } else {
                reject(new Error(`Child process exited with non-zero code: ${code}`));
            }
        });
    })
};

// Put your arguments in function call to test this functionality
await spawnChildProcess(['1', 25, 3, 'CLOSE']/* [someArgument1, someArgument2, ...] */);
