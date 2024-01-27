import { fork } from 'child_process'

const spawnChildProcess = async (args) => {
    const child = fork('./files/script.js', args)

    child.on('exit', (code) => {
        console.log('Child exit with code = ', code)
    })
};

// Put your arguments in function call to test this functionality
await spawnChildProcess( ['someArgument1', 'someArgument2']);
