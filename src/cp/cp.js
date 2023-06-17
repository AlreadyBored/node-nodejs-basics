import { ChildProcess, fork } from 'child_process';

const spawnChildProcess = async (args) => {
    // Write your code here
    try {
        const childFork = fork('./src/cp/files/script.js', args
            , {stdio: ['inherit', 'inherit', 'inherit', 'ipc']}
        );

        childFork.on('message', (data) => {
            console.log(data);
        });

    } catch (error) {
        console.log(error.message)
    }

};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2', 'someArgument3']);
