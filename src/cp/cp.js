import { spawn } from 'child_process'
import path from 'path'
import * as url from 'url'

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

const spawnChildProcess = async (args) => {
    const filePath = path.join(__dirname, 'files/script.js')

    spawn('node', [filePath, ...args], { stdio: ['inherit', 'inherit', 'inherit', 'ipc'] })
};

// Put your arguments in function call to test this functionality
spawnChildProcess( [2, 'text', '5']);
