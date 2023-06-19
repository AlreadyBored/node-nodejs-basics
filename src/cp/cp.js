import {fork} from 'child_process';
import {SCRIPT_JS} from '../constants/fileNames.js';
import getPath from '../utils/getPath.js';

const spawnChildProcess = async (args) => {
    const scriptPath = getPath(import.meta.url, '/files/', SCRIPT_JS);

    const child = fork(scriptPath, args);

    child.on('data', (data) => {
        console.log(data.toString());
    });

    child.on('error', (err) => {
        console.log(err.toString());
    });

    child.send('message');
};

// Put your arguments in function call to test this functionality
await spawnChildProcess([7, 10, 11]);
