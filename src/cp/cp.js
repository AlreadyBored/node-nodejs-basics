import { spawn } from 'node:child_process';

const spawnChildProcess = async (args) => {
    // Write your code here
    console.log(spawn('node', args))
};

// Put your arguments in function call to test this functionality
spawnChildProcess(  ['someArgument1', 'someArgument2', '...'] );
