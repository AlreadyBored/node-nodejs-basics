import {spawn, fork} from 'child_process';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const spawnChildProcess = async (args) => {
    const __filename = `${dirname(fileURLToPath(import.meta.url))}/files/script.js`;
    const child = fork(__filename, [...args], {silent: true})
    child.on('message', (data) => process.stdout.write(data))
    
    process.stdin.pipe(child.stdin)
    child.stdout.pipe(process.stdout)
};

// Put your arguments in function call to test this functionality
spawnChildProcess( ['arg1', 'arg2', 'arg3'] );
