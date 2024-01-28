import cp from 'child_process';

const spawnChildProcess = (args) => {
    const options = {stdio: ['pipe', 'pipe', 'pipe', 'ipc']};
    const childProcess = cp.fork('./src/cp/files/script.js', args,
        {stdio: ['pipe', 'pipe', 'pipe', 'ipc']}
    );

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);

    childProcess.on('error', (error) => {
        throw error;
    });
};

spawnChildProcess(['someArgument1', 'someArgument2']);
