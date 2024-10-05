import {spawn} from 'child_process'
const script = './src/cp/files/script.js'
const input = 'Lorem ipsum dolor sit amet'
//const input = 'CLOSE'



const spawnChildProcess = async (args) => {

    if (!Array.isArray(args)) {
        console.error('Incorrect arguments');
        return;
    }

    const childProcess = spawn('node', [script, ...args], {
        stdio: ['pipe', 'pipe', 'inherit'] // stdin and stdout for IPC
    });

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
  
    childProcess.on('message', (msg) => {
        console.log(`Message from child:  ${msg}`);
    })

    childProcess.stdin.write(input);


};

// Put your arguments in function call to test this functionality
await spawnChildProcess(['arg1', 'arg2', 'arg3']);
 
