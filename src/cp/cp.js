import path from 'node:path';
import { fileURLToPath } from 'url';
import { spawn } from 'node:child_process'


const spawnChildProcess = async (args) => {
    const directory = path.dirname(fileURLToPath(import.meta.url))
    const file = path.join(directory, 'files', 'script.js')
    const child = spawn('node',[file, ...args], { stdio: ['inherit', 'inherit', 'inherit', 'ipc'] })
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['fgh', 'rtyu']);
