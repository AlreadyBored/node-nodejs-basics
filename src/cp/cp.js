import {spawn} from 'child_process'
const spawnChildProcess = async (args) => {
    const dir = 'src/cp/files/'
    const scriptFileName = 'script.js'

    const childProcess = spawn('node', [dir + scriptFileName, ...args]);
    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(['someArgument1', 'someArgument2']);
