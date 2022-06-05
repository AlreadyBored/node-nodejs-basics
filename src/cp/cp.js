import { fork } from 'child_process';

export const spawnChildProcess = async (args) => {
    
    const child = fork('./files/script.js', args, {
        stdio: [
            'pipe', 'pipe', 'ignore', 'ipc',
        ]
    });

    process.stdin.pipe(child.stdin)
        
    child.stdout.on('data', (data) => {
        process.stdout.write(`[child stdout] ${data}`)
      });

};
