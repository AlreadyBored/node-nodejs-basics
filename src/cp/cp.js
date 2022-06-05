import { spawn } from 'child_process';

export const spawnChildProcess = async (args) => {
    let augArgs = args.slice(2);
    augArgs.unshift('./files/script.js');

    const childProcess = spawn('node', augArgs);

    process.stdin.on('data', chunk => {
        childProcess.stdin.write(chunk);
    });

    childProcess.stdout.on('data', chunk => {
        console.log(chunk.toString().replace('\n', ''));
    });

    childProcess.on('close', code => {
        process.stdin.unref();
        console.log('child process exit with code ' + code);
    });
};

await spawnChildProcess(process.argv);