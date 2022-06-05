import { fork } from 'child_process';

export const spawnChildProcess = async (args) => {
    const child = fork('./files/script.js', args, { silent: true });

    // console.log(child.);

    child.stdout.on('data', (data) => {
        process.stdout.write(data.toString());
    });

    child.stdin.write(process.argv.slice(2).toString());
};

spawnChildProcess(process.argv.slice(2));
