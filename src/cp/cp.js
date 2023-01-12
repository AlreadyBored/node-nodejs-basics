import { fork } from "node:child_process"

const spawnChildProcess = async (args) => {
    // Write your code here
    fork('script.js', args, { cwd: './files' })
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
