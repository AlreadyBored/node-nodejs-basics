import url from 'url';
import path from 'path';
import child_process from 'child_process';


const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const spawnChildProcess = async (args) => {
    const pathToFile = path.join(__dirname, 'files', 'script.js');
    
    const childProcess = child_process.spawn(`node ${pathToFile}`, args, {shell: true})

    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.pipe(process.stdout)

    childProcess.on('close', (code) => {
        console.log(`child process was closed with ${code}`);
    });
};