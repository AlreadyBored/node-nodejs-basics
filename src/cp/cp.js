
import { fork } from 'child_process'

const spawnChildProcess = async (args) => {
    // Write your code here
    fork('files/script.js', args, {
        stdio: [0, 1, 2, 'ipc']
    })
    
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2']);
