const { spawn } = require('child_process')

const spawnChildProcess = async (args) => {

    const child = spawn('node', [`${__dirname}/files/script.js`, ...args])

    process.stdin.pipe(child.stdin)

    child.stdout.on('data', data => {
        process.stdout.write(data)
    })

    child.on('error', (error) => {
        console.error(error.message);
    });

    child.on('exit', (code) => {
        console.log(code);
        process.exit(code);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['arg1', 'arg2']);

