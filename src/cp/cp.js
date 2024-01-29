import {spawn} from 'child_process'

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', ['src/cp/files/script.js', ...args], {
        stdio: ['pipe', 'pipe', 'inherit', 'ipc'],
      });
    
      process.stdin.pipe(childProcess.stdin);
      childProcess.stdout.pipe(process.stdout);
    
      return childProcess;
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument2", "someArgument3"])






