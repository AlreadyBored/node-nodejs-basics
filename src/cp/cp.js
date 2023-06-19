import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const scriptFolder = 'files';
const scriptFileName = 'script.js';

const spawnChildProcess = async (args) => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const scriptFilePath = path.join(__dirname, scriptFolder, scriptFileName);

    var child = spawn('node', [scriptFilePath].concat(args));

    // OUT to parent
    child.stdout.on('data', (data) => {
        process.stdout.write(data);
    });

    // IN to child
    process.stdin.pipe(child.stdin);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['someArgument1', 'someArgument2'] );
