import cp from 'child_process';

const spawnChildProcess = async (args) => {
    const child = cp.spawn('node', ['src/cp/files/script.js', ...args], {stdio: 'inherit'});
    child.on('error', (err) => console.log(err));
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['--example', '--example2']);
