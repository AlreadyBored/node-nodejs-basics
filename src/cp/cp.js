import child_process from 'child_process';

const spawnChildProcess = async (args) => {
    const childProcess = child_process.spawn(
        'node', ['src/cp/files/script.js', ...args]
    );

    process.stdin.on('data', (data) => {
        childProcess.stdin.write(data);
    });
    childProcess.stdout.on('data', (data) => {
        process.stdout.write(data);
    });
};

// Put your arguments in function call to test this functionality
await spawnChildProcess(['arg_1', 'arg_2', 'arg_3']);
