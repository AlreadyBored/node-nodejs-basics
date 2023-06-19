import { spawn } from 'child_process';
import path from 'path';
import url from 'url'

const spawnChildProcess = async (args) => {
    const __filename = url.fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    const file = path.join(__dirname, 'files', 'script.js');
    const childProcess = spawn('node', [file, ...args], { stdio: 'inherit' });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( [0, 1, 2, 3, 'one more'] );
