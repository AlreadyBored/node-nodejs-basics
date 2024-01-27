import { fork } from 'child_process';
import path from 'node:path'
import { fileURLToPath } from 'node:url'


const __dirname = path.dirname(fileURLToPath(import.meta.url))
const destinationFile = path.join(__dirname, 'files', 'script.js')


const spawnChildProcess = async (args) => {
    // Write your code here
    fork(destinationFile,args)
   
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['arg1','arg2']);