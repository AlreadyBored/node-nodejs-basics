    import { spawn } from 'child_process';

    const spawnChildProcess = async (args) => {
        const childProcces = spawn('node', ['script.js', ...args], { stdio: ['pipe', 'pipe', 'pipe', 'ipc'] });
        
        process.stdin.pipe(childProcces.stdin);
        childProcces.stdout.pipe(process.stdout);

        childProcces.on('exit', (code) => {
            console.log(code);
        });
    };

    const someArgument1 = '123';
    const someArgument2 = '456';
    spawnChildProcess([someArgument1, someArgument2]);
