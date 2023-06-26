import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async () => {
    const path = `${__dirname}/files/main.js`;
    const childProcess = spawn('node', [path]);

    process.stdin.on('data', (value) => {
        childProcess.stdin.write(value);
    });

    childProcess.stdout.on('data', (value) => {
        console.log(value.toString());
    });


    childProcess.on('exit', (value) => {
        console.log('EXIT', value)
        process.exit(0);
    })

    childProcess.on('error', (error) => {
        console.log('ERROR', error)
    })
};

await spawnChildProcess();
