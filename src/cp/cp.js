import { fork } from 'child_process'

const spawnChildProcess = async (args) => {
    const childProcess = fork('src/cp/files/script.js', args, { silent: true })

    process.stdin.pipe(childProcess.stdin)

    childProcess.stdout.pipe(process.stdout)
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['0', '1', '2']);
