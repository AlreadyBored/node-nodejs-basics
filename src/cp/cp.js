import { spawn } from 'child_process';
import path from 'path';

const __dirname = path.resolve();
const pathToScriptFile = path.join(__dirname, 'files', 'script.js');

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node ' + pathToScriptFile, args, {shell: true});
    
    process.stdin.on('data', data => {                  
        childProcess.stdin.write(data);        
    });

    childProcess.stdout.on('data', data => {        
        process.stdout.write(data);           
    });

    childProcess.on('close', () => {
        process.exit();
    }); 
};

const mockArgs = ['Foo_0', 'Foo_1', 'Foo_2'];
spawnChildProcess(mockArgs);
     