import {spawn} from 'child_process'

const spawnChildProcess = async (args) => {
    const workerProcess = spawn('node', ['./src/cp/files/script.js', ...args]);

    workerProcess.stdout.on('data', (data) => {
        console.log('stdout: ' + data);
     });
   
     workerProcess.stderr.on('data', (data) => {
        console.log('stderr: ' + data);
     });

     workerProcess.on('exit', (code) =>{
        console.log('child process exited with code ' + code);
     });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2', 'someArgument3'] );
