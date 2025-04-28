const spawnChildProcess = async (args) => {
    // Write your code here    
    const { exec, spawn } = await import('node:child_process');

    const child = spawn('node', ['./src/cp/files/script.js', ...args]);

    process.stdin.pipe(child.stdin);
    
    child.stdout.on('data', (data) => {
      console.log(`Script process says: ${data}`);
    });
        
    child.stderr.on('data', (data) => {
      console.error(`Script process error: ${data}`);
    });
        
    child.on('close', (code) => {
      console.log(`Script process exited with code ${code}`);
    });

 }

// Put your arguments in function call to test this functionality
await spawnChildProcess(['someArgument1', 'someArgument2']);
