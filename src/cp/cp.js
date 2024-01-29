const { spawn } = import('child_process');

const spawnChildProcess = (args) => {
    const child = spawn('node', ['script.js', ...args], { stdio: ['pipe', 'pipe', 'inherit'] });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);

    child.on('error', (error) => {
        console.error(`Child process encountered an error: ${error.message}`);
    });

    child.on('exit', (code) => {
        console.log(`Child process exited with code ${code}`);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( [someArgument1, someArgument2]);
